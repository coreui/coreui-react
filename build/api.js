#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const docgen = require('react-docgen-typescript')
const fs = require('fs').promises
const path = require('path')
const globby = require('globby')
const pkg = require('../package.json')

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

  let content = `| Property | Description | Type | Default |\n`
  content += `| --- | --- | --- | --- |\n`

  for (const [key, value] of Object.entries(props).sort()) {
    if (
      value.parent.fileName !== 'react/node_modules/@types/react/index.d.ts' &&
      !value['description'].includes('@ignore')
    ) {
      const name = value.name || ''
      const description =
        value.description.replaceAll('\n', '<br/>').replaceAll(' [docs]', '') || '-'
      const type =
        value.type ? value.type.name.includes('ReactElement')
          ? 'ReactElement'
          : value.type.name : ''
      const defaultValue = value.defaultValue ? value.defaultValue.value : '-'

      content += `| **${name}** | ${description} | \`${type}\` | ${defaultValue} |\n`
      console.log(`${filename} - ${key}`)
    }
  }

  await fs
    .writeFile(`docs/${pkg.config.version_short}/api/${filename}.api.mdx`, content, {
      encoding: 'utf8',
    })
    .then(() => {
      console.log(`File created: ${filename}.api.mdx`)
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
      }),
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
