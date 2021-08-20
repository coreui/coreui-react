#!/usr/bin/env node
'use strict'

const docgen = require('react-docgen-typescript')
const fs = require('fs').promises
const path = require('path')
const globby = require('globby')

// These are the filetypes we only care about replacing the version
const GLOB = ['src/components/**/*.tsx']
const GLOBBY_OPTIONS = {
  cwd: path.join(__dirname, '..'),
  gitignore: true,
  ignore: ['**/__tests__/**'],
}
const EXCLUDED_FILES = []

const options = {
  savePropValueAsString: true,
}

async function createMdx(filename, name, props) {
  if (typeof props === 'undefined') return

  // let content = `### ${name}\n\n| Prop name | Description | Type |\n| --- | --- | --- |\n`
  let content = `| Prop name | Description | Type |\n| --- | --- | --- |\n`

  for (const [key, value] of Object.entries(props).sort()) {
    if (value.parent.fileName !== 'react/node_modules/@types/react/index.d.ts') {
      content += `| ${value['name']} | ${value['description']} | ${value['type']['name']} |\n`
      console.log(`${key}: ${value}`)
    }
  }

  await fs.writeFile(`api/${filename}.api.mdx`, content, { encoding: 'utf8' }).then(() => {
    // Do whatever you want to do.
    console.log('Done')
  })
}

async function main() {
  try {
    const files = await globby(GLOB, GLOBBY_OPTIONS, EXCLUDED_FILES)

    await Promise.all(
      files.map((file) => {
        const props = docgen.parse(file, options)
        if (props && typeof props[0] !== 'undefined') {
          const filename = path.basename(file, '.tsx')
          createMdx(filename, props[0].displayName, props[0].props)
        }
        // const props = docgen.parse(file, options)
        // if (props) console.log(props)
      }),
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
