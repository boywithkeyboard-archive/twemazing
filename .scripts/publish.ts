import { exec } from 'node:child_process'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const publishPackages = async () => {
  const packages = await readdir(join(__dirname, '../packages'))
  
  for (const p of packages)
    exec('npm publish --access public', { cwd: join(__dirname, `../packages/${p}`) })
}

publishPackages()
