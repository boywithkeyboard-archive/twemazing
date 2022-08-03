import chalk from 'chalk'
import { ensureDir } from 'fs-extra'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const generate = async (emoji: string, size: number) => {
  const buffer = await readFile(join(__dirname, `../svg/${emoji}`))

  try {
    sharp(Buffer.from(buffer))
      .png()
      .resize(size, size)
      .toFile(join(__dirname, `../png/${size}x/${emoji.replace('.svg', '.png')}`))
  } catch (err) {
    sharp(Buffer.from(buffer))
      .png()
      .resize(size, size)
      .toFile(join(__dirname, `../png/${size}x/${emoji.replace('.svg', '.png')}`))
  }
}

export const generatePNG = async () => {
  const emojis = await readdir(join(__dirname, '../svg'))

  await ensureDir(join(__dirname, '../png/64x'))
  await ensureDir(join(__dirname, '../png/128x'))
  await ensureDir(join(__dirname, '../png/256x'))
  await ensureDir(join(__dirname, '../png/512x'))

  for (let [i, e] of emojis.entries()) {
    await generate(e, 512)
    await generate(e, 256)
    await generate(e, 128)
    await generate(e, 64)

    console.clear()
    console.log(chalk.gray(`${chalk.green(`${Math.round((((i + 1)/emojis.length) * 100) * 100) / 100}%`)} - ${chalk.white('generate png files')} (${i + 1}/${emojis.length})`))
  }
}
