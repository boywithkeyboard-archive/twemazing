import chalk from 'chalk'

export default async () => {
  console.log(chalk.bold.yellowBright('grabbing latest emojis...'))

  const res = await fetch('https://api.github.com/repos/twitter/twemoji/git/trees/master?recursive=1')
  , json = await res.json()

  let emojis: string[] = []

  for (let file of json.tree)
    if (file.path.startsWith('assets/svg') && file.path !== 'assets/svg')
      emojis = [file.path, ...emojis]

  return emojis
}
