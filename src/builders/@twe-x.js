import { writeFile } from 'fs/promises'
import { copy } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

export default async ({ release }) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  // add keywords
  release.keywords.push('cdn')
  release.keywords.push('images')

  // generate package.json
  await writeFile(path.join(__dirname, '../../packages/@twe-x/package.json'), JSON.stringify({
    name: '@twe/x',
    version: release.version,
    description: release.description,
    funding: release.funding,
    repository: release.repository,
    keywords: release.keywords,
    author: release.author,
    license: release.license,
    bugs: release.bugs,
    homepage: release.homepage
  }))

  // copy license
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/@twe-x/license'))

  // copy readme
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/@twe-x/readme.md'))
}