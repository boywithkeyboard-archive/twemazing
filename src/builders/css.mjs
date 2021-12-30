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
  if (existsSync(path.join(__dirname, '../../packages/css'))) {
    await emptyDir(path.join(__dirname, '../../packages/css'))
  } else {
    await mkdir(path.join(__dirname, '../../packages/css'))
  }

  config.keywords.push('css')
  config.keywords.push('stylesheet')

  // generate package.json
  await log('Generating package.json...')
  await writeFile(path.join(__dirname, '../../packages/css/package.json'), JSON.stringify({
    name: '@twemazing/css',
    version: config.version,
    description: config.description,
    main: 'any.min.css',
    browser: 'any.min.css',
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
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/css/license'))

  // copy readme
  await log('Copying the readme...')
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/css/readme.md'))

  // generate css
  await log('Generating the stylesheet...')
let stylesheet = `

.twe {
  display: inline-block;
  height: 1em;
  width: 1em;
  margin: 0 .05em 0 .1em;
  vertical-align: -0.1em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1em 1em;
}
`

for (const emoji of emojis) {
stylesheet += `
.twe-${emoji.shortName.toLowerCase().replaceAll(' ', '-')} {
  background: url('https://cdn.jsdelivr.net/npm/@twe/x/${emoji.codepoint.replaceAll(' ', '-')}.svg');
}
`
}
  stylesheet = config.head + stylesheet

  await writeFile(path.join(__dirname, '../../packages/css/any.css'), stylesheet)

  // generate minified stylesheet
  await log('Generating minified stylesheet...')
  const minifiedStylesheet = new CleanCSS().minify(stylesheet)
  await writeFile(path.join(__dirname, '../../packages/css/any.min.css'), minifiedStylesheet.styles.replace(config.head, config.minifiedHead + '\n'), 'utf-8')
})()