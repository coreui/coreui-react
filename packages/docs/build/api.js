#!/usr/bin/env node

'use strict'

const fs = require('node:fs').promises
const path = require('node:path')
const globby = require('globby')
const docgen = require('react-docgen-typescript')

const GLOB = [
  '**/src/**/*.tsx',
  '../node_modules/@coreui/icons-react/src/**/*.tsx',
  '../node_modules/@coreui/react-chartjs/src/**/*.tsx',
]
const GLOBBY_OPTIONS = {
  absolute: true,
  cwd: path.join(__dirname, '..', '..'),
  gitignore: false,
  ignore: ['**/docs/**', '**/__tests__/**'],
}
const EXCLUDED_FILES = []

const options = {
  savePropValueAsString: true,
  shouldIncludePropTagMap: true,
}

const PRO_COMPONENTS = []

const replace = (text) =>
  text
    .replaceAll('(<', '(\\<')
    .replace(/<C(.*)\/>/g, '`<C$1/>`')
    .replaceAll('\n', '<br/>')

async function createMdx(file, filename, name, props) {
  if (typeof props === 'undefined') {
    return
  }

  const pro = PRO_COMPONENTS.some((v) => file.includes(v))
  let relativeFilename
  if (file.includes('node_modules')) {
    relativeFilename = file.replace(path.join(file, '..', '..', '..'), '').replace('coreui-', '')
  } else {
    relativeFilename = file.replace(GLOBBY_OPTIONS.cwd, '').replace('coreui-', '')
  }

  if (!pro) {
    relativeFilename = relativeFilename.replace('-pro', '')
  }

  let content = `\n`
  content += `\`\`\`jsx\n`
  content += `import { ${name} } from '@coreui/${relativeFilename.split('/')[1]}'\n`
  content += `// or\n`
  content += `import ${name} from '@coreui${relativeFilename.replace('.tsx', '')}'\n`
  content += `\`\`\`\n\n`

  let index = 0
  for (const [key, value] of Object.entries(props).sort()) {
    if (
      value.parent.fileName.includes('@types/react/index.d.ts') ||
      value.parent.fileName.includes('@types/react/ts5.0/index.d.ts')
    ) {
      continue
    }

    if (value.tags.ignore === '') {
      continue
    }

    if (index === 0) {
      content += `| Property | Description | Type | Default |\n`
      content += `| --- | --- | --- | --- |\n`
    }
    let name = value.name || ''
    const since = value.tags.since ? ` **_${value.tags.since}+_**` : ''
    const deprecated = value.tags.deprecated ? ` **_Deprecated ${value.tags.deprecated}+_**` : ''
    const description = value.description || '-'
    const type = value.type
      ? (value.type.name.includes('ReactElement')
        ? 'ReactElement'
        : value.type.name)
      : ''
    const defaultValue = value.defaultValue
      ? value.defaultValue.value.replace('undefined', '-')
      : '-'
    const types = []
    type.split(' | ').map((element) => {
      types.push(`\`${element.replace(/"/g, "'")}\``)
    })

    content += `| **${name}**${since}${deprecated} | ${replace(description)} | ${types.join(
      ' \\| ',
    )} | ${replace(defaultValue)} |\n`
    index++
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
