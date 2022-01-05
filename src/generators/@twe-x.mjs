import { writeFile } from 'fs/promises'
import config from '../config.mjs'
import { copy } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import log from '../logger.mjs'

(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  config.keywords.push('cdn')
  config.keywords.push('images')

  // generate package.json
  await log('Generating package.json...')
  await writeFile(path.join(__dirname, '../../packages/@twe-x/package.json'), JSON.stringify({
    name: '@twe/x',
    version: config.version,
    description: config.description,
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
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/@twe-x/license'))

  // copy readme
  await log('Copying the readme...')
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/@twe-x/readme.md'))
})()