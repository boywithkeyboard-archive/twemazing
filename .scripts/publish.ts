import { exec } from 'node:child_process'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const publishPackages = async () => {
  const packages = await readdir(join(__dirname, '../packages'))
  
  for (const p of packages) {
    const version = JSON.parse(await readFile(join(__dirname, '../package.json'), { encoding: 'utf-8' })).version

    const packageJson = JSON.parse(await readFile(join(__dirname, `../packages/${p}/package.json`), { encoding: 'utf-8' }))
    packageJson.version = version

    await writeFile(join(__dirname, `../packages/${p}/package.json`), JSON.stringify(packageJson, null, 2))

    exec('npm publish --access public', { cwd: join(__dirname, `../packages/${p}`) })
  }
}

publishPackages()
