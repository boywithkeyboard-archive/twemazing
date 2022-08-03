import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { optimize } from 'svgo'
import chalk from 'chalk'

export const optimizeSVG = async () => {
  const emojis = await readdir(join(__dirname, '../svg'))

  for (let [i, e] of emojis.entries()) {
    const svgString = await readFile(join(__dirname, `../svg/${e}`), { encoding: 'utf-8' })

    const result = optimize(svgString, {
      multipass: true
    })

    // @ts-ignore
    const optimizedSvgString = result.data

    await writeFile(join(__dirname, `../svg/${e}`), optimizedSvgString)

    console.clear()
    console.log(chalk.gray(`${chalk.green(`${Math.round((((i + 1)/emojis.length) * 100) * 100) / 100}%`)} - ${chalk.whiteBright('optimize svg files')} (${i + 1}/${emojis.length})`))
  }
}
