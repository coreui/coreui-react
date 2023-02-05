#!/usr/bin/env node
'use strict'

const docgen = require('react-docgen-typescript')
const fs = require('fs').promises
const path = require('path')
const globby = require('globby')

const GLOB = ['**/src/**/*.tsx']
const GLOBBY_OPTIONS = {
  absolute: true,
  cwd: path.join(__dirname, '..', '..'),
  gitignore: true,
  ignore: ['**/docs/**', '**/__tests__/**'],
}
const EXCLUDED_FILES = []

const options = {
  savePropValueAsString: true,
  shouldIncludePropTagMap: true,
}

const PRO_COMPONENTS = []

async function createMdx(file, filename, name, props) {
  if (typeof props === 'undefined') return

  const pro = PRO_COMPONENTS.some((v) => file.includes(v))
  const relativeFilename = file.replace(GLOBBY_OPTIONS.cwd, '').replace('coreui-', '')

  let content = `
\`\`\`jsx
import { ${name} } from '@coreui/${relativeFilename.split('/')[1]}${pro ? '-pro' : ''}'
// or
import ${name} from '@coreui${relativeFilename.replace('.tsx', '')}'
\`\`\`\n
`

  let index = 0
  for (const [key, value] of Object.entries(props).sort()) {
    if (
      !value.parent.fileName.includes('@types/react/index.d.ts') &&
      typeof value.tags.ignore === 'undefined'
    ) {
      if (index === 0) {
        content += `| Property | Description | Type | Default |\n`
        content += `| --- | --- | --- | --- |\n`
      }
      let name = value.name || ''
      const since = value.tags.since ? ` **_${value.tags.since}+_**` : ''
      const deprecated = value.tags.deprecated ? ` **_Deprecated ${value.tags.deprecated}+_**` : ''
      const description = value.description || '-'
      const type = value.type
        ? value.type.name.includes('ReactElement')
          ? 'ReactElement'
          : value.type.name
        : ''
      const defaultValue = value.defaultValue
        ? value.defaultValue.value.replace('undefined', '-')
        : '-'
      const types = []
      type.split(' | ').map((element) => {
        types.push(`\`${element.replace(/"/g, "'")}\``)
      })

      const replace = (text) =>
        text
          .replaceAll('\n', '<br/>')
          .replaceAll('(<', '(\\<')
          .replaceAll('{', '\\{')
          .replaceAll('}', '\\}')

      content += `| **${name}**${since}${deprecated} | ${replace(description)} | ${types.join(
        ' \\| ',
      )} | ${replace(defaultValue)} |\n`
      console.log(`${filename} - ${key}`)
      index++
    }
  }

  await fs
    .writeFile(`content/api/${filename}.api.mdx`, content, {
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
        console.log(file)
        const props = docgen.parse(file, options)
        if (props && typeof props[0] !== 'undefined') {
          const filename = path.basename(file, '.tsx')
          createMdx(file, filename, props[0].displayName, props[0].props)
        }
      }),
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
