import { writeFile, mkdir, readFile } from 'fs/promises'
import config from '../config.mjs'
import { copy, emptyDir } from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import log from '../logger.mjs'
import emojis from '../emojis.mjs'
import { existsSync, fstat } from 'fs'

(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  // clear directory
  if (existsSync(path.join(__dirname, '../../packages/react'))) {
    await emptyDir(path.join(__dirname, '../../packages/react'))
  } else {
    await mkdir(path.join(__dirname, '../../packages/react'))
  }

  config.keywords.push('react')
  config.keywords.push('components')

  // generate package.json
  await log('Generating package.json...')
  await writeFile(path.join(__dirname, '../../packages/react/package.json'), JSON.stringify({
    name: 'twemazing',
    version: config.version,
    description: config.description,
    main: 'dist/cjs/index.js',
    module: 'dist/esm/index.js',
    types: 'dist/index.d.ts',
    files: [
      'dist'
    ],
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
  await copy(path.join(__dirname, '../../license'), path.join(__dirname, '../../packages/react/license'))

  // copy readme
  await log('Copying the readme...')
  await copy(path.join(__dirname, '../../readme.md'), path.join(__dirname, '../../packages/react/readme.md'))

  // -------------------------------- generate main file -------------------------------- //

  await log('Generating the main file...')

  // create directory
  await mkdir(path.join(__dirname, '../../packages/react/src'))

  // create file

  let mainFile = ''

  for (const emoji of emojis) {
    const name = emoji.shortName.replaceAll(' ', '').replace('1st', 'First').replace('2nd', 'Second').replace('3rd', 'Third')
    mainFile += `export { default as ${name} } from './components/${name}'\n`
  }

  await writeFile(path.join(__dirname, '../../packages/react/src/index.ts'), mainFile)

  // -------------------------------- generate component files -------------------------------- //

  await log('Generating components...')

  // create directory
  await mkdir(path.join(__dirname, '../../packages/react/src/components'))

  for (const emoji of emojis) {
    const svg = await readFile(path.join(__dirname, `../../twemojis/${emoji.codepoint}.svg`), 'utf-8')
const component = `import React from 'react'

const ${emoji.shortName.replaceAll(' ', '').replace('1st', 'First').replace('2nd', 'Second').replace('3rd', 'Third')} = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? \`\${size}rem\` : \`\${size}px\`

  return (
    ${svg.replace('viewBox="0 0 36 36"', 'viewBox="0 0 36 36" style={{ width: width }}')}
  )
}

export default ${emoji.shortName.replaceAll(' ', '').replace('1st', 'First').replace('2nd', 'Second').replace('3rd', 'Third')}
`

    await writeFile(path.join(__dirname, `../../packages/react/src/components/${emoji.shortName.replaceAll(' ', '').replace('1st', 'First').replace('2nd', 'Second').replace('3rd', 'Third')}.tsx`), component)
  }

  // -------------------------------- generate tsconfig -------------------------------- //

  await log('Generating tsconfig...')

  const tsconfig = {
    "compilerOptions": {
      // Default
      "target": "es5", 
      "esModuleInterop": true, 
      "forceConsistentCasingInFileNames": true,
      "strict": true, 
      "skipLibCheck": true,
  
      // Added
      "jsx": "react", 
      "module": "ESNext",  
      "declaration": true,
      "declarationDir": "types",
      "sourceMap": true,
      "outDir": "dist",
      "moduleResolution": "node",
      "allowSyntheticDefaultImports": true,
      "emitDeclarationOnly": true,
    }
  }

  await writeFile(path.join(__dirname, '../../packages/react/tsconfig.json'), JSON.stringify(tsconfig,null,'\t'))

  // -------------------------------- generate rollup config -------------------------------- //

  await log('Generating config for rollup...')

  const rollup = `import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs({ sourceMap: false }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
  `

  await writeFile(path.join(__dirname, '../../packages/react/rollup.config.js'), rollup)

  // -------------------------------- generate npmignore -------------------------------- //

  await log('Generating npmignore...')

  const npmignore = `
  src
  `

  await writeFile(path.join(__dirname, '../../packages/react/.npmignore'), npmignore)
})()