import chalk from 'chalk'
import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { optimize } from 'svgo'

export default async () => {
  const emojis = await readdir(join(__dirname, '../../emojis'))

  for (let [i, e] of emojis.entries()) {
    const svgString = await readFile(join(__dirname, `../../emojis/${e.replace('assets/svg/', '')}`), { encoding: 'utf-8' })

    const result = optimize(svgString, {
      multipass: true
    })

    // @ts-ignore
    const optimizedSvgString = result.data

    await writeFile(join(__dirname, `../../emojis/${e.replace('assets/svg/', '')}`), optimizedSvgString)

    console.clear()
    console.log(`${chalk.bold.yellowBright('optimizing emojis...')} ${chalk.blackBright(`(${i + 1}/${emojis.length})`)}`)
  }
}
