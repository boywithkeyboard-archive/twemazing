import { writeFile, mkdir } from 'fs/promises'
import { copy, emptyDir } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'
import CleanCSS from 'clean-css'

export default async ({ release, emojis }) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  // clear directory
  if (existsSync(path.join(__dirname, '../../packages/css'))) {
    await emptyDir(path.join(__dirname, '../../packages/css'))
  } else {
    await mkdir(path.join(__dirname, '../../packages/css'))
  }

  // add keywords
  release.keywords.push('css')
  release.keywords.push('stylesheet')

  // generate package.json
  await writeFile(path.join(__dirname, '../../packages/css/package.json'), JSON.stringify({
    name: '@twemazing/css',
    version: release.version,
    description: release.description,
    main: 'any.min.css',
    browser: 'any.min.css',
    funding: release.funding,
    repository: release.repository,
    keywords: release.keywords,
    author: release.author,
    license: release.license,
    bugs: release.bugs,
    homepage: release.homepage
  }))

  // copy license
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/css/license'))

  // copy readme
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/css/readme.md'))

  // generate css
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
  stylesheet = release.head + stylesheet

  await writeFile(path.join(__dirname, '../../packages/css/any.css'), stylesheet)

  // generate minified stylesheet
  const minifiedStylesheet = new CleanCSS().minify(stylesheet)
  await writeFile(path.join(__dirname, '../../packages/css/any.min.css'), minifiedStylesheet.styles.replace(release.head, release.minifiedHead + '\n'), 'utf-8')
}