import { writeFile } from 'fs/promises'
import { join } from 'path'
import { ensureDir } from 'fs-extra'
import chalk from 'chalk'

export default async (emojis: string[]) => {
  for (let [i, e] of emojis.entries()) {
    const res = await fetch(`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/${e}`)
    , svgString = await res.text()

    await ensureDir(join(__dirname, '../../emojis/'))
    await writeFile(join(__dirname, `../../emojis/${e.replace('assets/svg/', '')}`), svgString)

    console.clear()
    console.log(`${chalk.bold.yellowBright('downloading emojis...')} ${chalk.blackBright(`(${i + 1}/${emojis.length})`)}`)
  }
}
