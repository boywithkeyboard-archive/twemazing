import { copy } from 'fs-extra'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export const createPackages = async () => {
  const version = JSON.parse(await readFile(join(__dirname, '../package.json'), { encoding: 'utf-8' })).version

  , create = async (packageJsonSrc: string, src: string, packageDir: string) => {
    await copy(join(__dirname, src), join(__dirname, packageDir))
  
    const packageJson = JSON.parse(await readFile(join(__dirname, packageJsonSrc), { encoding: 'utf-8' }))
    packageJson.version = version

    await writeFile(join(__dirname, `${packageDir}/package.json`), JSON.stringify(packageJson, null, 2))
    await copy(join(__dirname, '../LICENSE'), join(__dirname, `${packageDir}/LICENSE`))
  }

  // publish svg package
  await create(
    '../.scripts/packages/svg.json',
    '../svg',
    '../packages/svg'
  )

  // publish png packages
  await create(
    '../.scripts/packages/64x.json',
    '../png/64x',
    '../packages/64x'
  )

  await create(
    '../.scripts/packages/128x.json',
    '../png/128x',
    '../packages/128x'
  )

  await create(
    '../.scripts/packages/256x.json',
    '../png/256x',
    '../packages/256x'
  )

  await create(
    '../.scripts/packages/512x.json',
    '../png/512x',
    '../packages/512x'
  )
}
