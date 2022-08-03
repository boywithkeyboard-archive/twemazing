import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { optimize } from 'svgo'

export const optimizeSVG = async () => {
  const emojis = await readdir(join(__dirname, '../svg'))

  for (const e of emojis) {
    const svgString = await readFile(join(__dirname, `../svg/${e}`), { encoding: 'utf-8' })

    const result = optimize(svgString, {
      multipass: true
    })

    // @ts-ignore
    const optimizedSvgString = result.data

    await writeFile(join(__dirname, `../svg/${e}`), optimizedSvgString)
  }
}
