import chalk from 'chalk'
import downloadEmojis from './modules/downloadEmojis'
import grabLatestEmojis from './modules/grabLatestEmojis'
import optimizeEmojis from './modules/optimizeEmojis'

(async () => {
  const time = Date.now()

  // grab the latest emojis
  const emojis = await grabLatestEmojis()

  // download latest emojis
  await downloadEmojis(emojis)

  // optimize emojis
  await optimizeEmojis()

  console.log(`${chalk.blackBright('updated package within')} ${chalk.bold.greenBright((Date.now() - time) / 1000)} ${chalk.blackBright('seconds.')}`)
})()
