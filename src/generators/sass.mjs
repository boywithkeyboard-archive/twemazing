import { writeFile, mkdir } from 'fs/promises'
import config from '../config.mjs'
import { copy, emptyDir } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import log from '../logger.mjs'
import emojis from '../emojis.mjs'
import { existsSync } from 'fs'
import CleanCSS from 'clean-css'

(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  // clear directory
  if (existsSync(path.join(__dirname, '../../packages/sass'))) {
    await emptyDir(path.join(__dirname, '../../packages/sass'))
  } else {
    await mkdir(path.join(__dirname, '../../packages/sass'))
  }

  config.keywords.push('sass')
  config.keywords.push('stylesheet')

  // generate package.json
  await log('Generating package.json...')
  await writeFile(path.join(__dirname, '../../packages/sass/package.json'), JSON.stringify({
    name: '@twemazing/sass',
    version: config.version,
    description: config.description,
    main: 'any.min.sass',
    browser: 'any.min.sass',
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
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/sass/license'))

  // copy readme
  await log('Copying the readme...')
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/sass/readme.md'))

  // generate sass
  await log('Generating the stylesheet...')
let stylesheet = `

@mixin emoji($key)
  background: url('https://cdn.jsdelivr.net/npm/@twe/x/#{$key}.svg')

.twe
  display: inline-block
  height: 1em
  width: 1em
  margin: 0 .05em 0 .1em
  vertical-align: -0.1em
  background-repeat: no-repeat
  background-position: center center
  background-size: 1em 1em
`

for (const emoji of emojis) {
stylesheet += `
.twe-${emoji.shortName.toLowerCase().replaceAll(' ', '-')}
  @include emoji('${emoji.codepoint}')
`
}
  stylesheet = config.head + stylesheet
  await writeFile(path.join(__dirname, '../../packages/sass/any.sass'), stylesheet)
})()