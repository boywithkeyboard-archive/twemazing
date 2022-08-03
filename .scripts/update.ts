import extract from 'extract-zip'
import { move, remove } from 'fs-extra'
import { rmdir, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { generatePNG } from './modules/generatePNG'
import { optimizeSVG } from './modules/optimizeSVG'
import https from 'node:https'
import { createWriteStream } from 'node:fs'
import { createPackages } from './modules/createPackages'

const update = async () => {
  console.clear()

  const latestVersion = 'v14.0.2'//process.env.latestVersion

  if (!latestVersion) return

  await writeFile(join(__dirname, '../version.txt'), `${latestVersion}\n`)

  const file = createWriteStream(join(__dirname, '../archive.zip'))
  
  https.get(`https://codeload.github.com/twitter/twemoji/zip/${latestVersion}`, res => {
    res.pipe(file)
  
    file.on('finish', async () => {
      file.close()

      await extract(join(__dirname, '../archive.zip'), { dir: join(__dirname, '../archive') })
      await rmdir(join(__dirname, '../svg'))
      await move(join(__dirname, `../archive/twemoji-${latestVersion.replace('v', '')}/assets/svg`), join(__dirname, '../svg'))
      await remove(join(__dirname, '../archive/'))
      await unlink(join(__dirname, '../archive.zip'))

      await optimizeSVG()
      await generatePNG()

      await createPackages()
    })
  })
}

update()
