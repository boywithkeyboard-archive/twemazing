const fs = require('fs')
const config = require('../config.json')
const fse = require('fs-extra')
const path = require('path')

config.keywords.push('cdn')
config.keywords.push('images')

// generate package.json
fs.writeFileSync(path.join(__dirname, '../../packages/cdn/package.json'), JSON.stringify({
  name: "@twemazing/cdn",
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
fse.copySync(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/cdn/license'))

// copy readme
fse.copySync(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/cdn/readme.md'))
