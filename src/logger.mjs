import chalk from 'chalk'

export default async (message, p) => {
  return console.log(chalk.bold.yellowBright(p ? `@twemazing/${p}` : 'twemazing') + chalk.blackBright(` » ${message}`))
}