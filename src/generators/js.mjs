import { writeFile, mkdir } from 'fs/promises'
import config from '../config.mjs'
import { copy, emptyDir } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import log from '../logger.mjs'
import emojis from '../emojis.mjs'
import { existsSync } from 'fs'
import { minify } from 'terser'

(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  // clear directory
  if (existsSync(path.join(__dirname, '../../packages/js'))) {
    await emptyDir(path.join(__dirname, '../../packages/js'))
  } else {
    await mkdir(path.join(__dirname, '../../packages/js'))
  }

  config.keywords.push('js')
  config.keywords.push('javascript')

  // generate package.json
  await log('Generating package.json...')
  await writeFile(path.join(__dirname, '../../packages/js/package.json'), JSON.stringify({
    name: '@twemazing/js',
    version: config.version,
    description: config.description,
    main: 'any.min.js',
    browser: 'any.min.js',
    funding: config.funding,
    repository: config.repository,
    keywords: config.keywords,
    author: config.author,
    license: config.license,
    bugs: config.bugs,
    homepage: config.homepage
  }))

  // copy license
  await log('Copying the license...')
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/js/license'))

  // copy readme
  await log('Copying the readme...')
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/js/readme.md'))

  // generate js
  await log('Generating the script...')

let script = `\nconst emojis = [\n`

for (const emoji of emojis) {
script += `  {
    n: '${emoji.shortName.toLowerCase().replaceAll(' ', '-')}',
    c: '${emoji.codepoint}'
  },
`
}

script += `]

const twe = document.querySelectorAll('.twe')

// get amount of emojis
let amountOfEmojis = twe.length

// loop through all and add default style
while (amountOfEmojis--) {
  twe[amountOfEmojis].style.display = 'inline-block'
  twe[amountOfEmojis].style.height = '1em'
  twe[amountOfEmojis].style.width = '1em'
  twe[amountOfEmojis].style.margin = '0 .05em 0 .1em'
  twe[amountOfEmojis].style.verticalAlign = '-0.1em'
  twe[amountOfEmojis].style.backgroundRepeat = 'no-repeat'
  twe[amountOfEmojis].style.backgroundPosition = 'center center'
  twe[amountOfEmojis].style.backgroundSize = '1em 1em'

  const name = twe[amountOfEmojis].classList[1].replace('twe-', '')
  const emoji = emojis.find(emoji => emoji.n == name)

  twe[amountOfEmojis].style.background = \`url(https://cdn.jsdelivr.net/npm/@twe/x/\${emoji.c}.svg)\`
}
`
  script = config.head + '\n' + script

  await writeFile(path.join(__dirname, '../../packages/js/any.js'), script)

  // generate minified script
  await log('Generating minified script...')
  let minifiedScript = await minify(script)
  minifiedScript = minifiedScript.code
  await writeFile(path.join(__dirname, '../../packages/js/any.min.js'), minifiedScript.replace(config.head, config.minifiedHead), 'utf-8')
})()