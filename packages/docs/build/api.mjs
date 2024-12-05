#!/usr/bin/env node

'use strict'

import { globby } from 'globby'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'react-docgen-typescript'
import showdown from 'showdown'

/**
 * Derive __dirname in ESM
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const converter = new showdown.Converter({ simpleLineBreaks: true })

/**
 * Glob patterns to locate .tsx files for documentation.
 * Adjust these patterns based on your project structure.
 */
const GLOB_PATTERNS = [
  // '**/src/components/date-picker/*.tsx',
  '**/src/**/*.tsx',
  '../node_modules/@coreui/icons-react/src/**/*.tsx',
  '../node_modules/@coreui/react-chartjs/src/**/*.tsx',
]

/**
 * Options for globby to control file matching behavior.
 */
const GLOBBY_OPTIONS = {
  absolute: true,
  cwd: path.join(__dirname, '..', '..'),
  gitignore: false,
  ignore: ['**/docs/**', '**/__tests__/**'],
}

/**
 * Excluded files list (currently unused).
 * Can be utilized for additional exclusion patterns if needed.
 */
const EXCLUDED_FILES = [] // Currently unused, but can be utilized if needed

/**
 * Options for react-docgen-typescript parser.
 */
const DOCGEN_OPTIONS = {
  shouldIncludePropTagMap: true,
}

/**
 * List of pro components that require special handling.
 */
const PRO_COMPONENTS = [
  'CCalendar',
  'CDatePicker',
  'CDateRangePicker',
  'CFormMask',
  'CLoadingButton',
  'CMultiSelect',
  'CRating',
  'CRangeSlider',
  'CRating',
  'CSmartPagination',
  'CSmartTable',
  'CTimePicker',
  'CVirtualScroller',
]

const TEXT_REPLACEMENTS = {
  CDatePicker: {
    description: [{ 'React Calendar': 'React Date Picker' }],
    example: [{ CCalendar: 'CDatePicker' }],
  },
  CDateRangePicker: {
    description: [{ 'React Calendar': 'React Date Range Picker' }],
    example: [{ CCalendar: 'CDateRangePicker' }],
  },
}

/**
 * Escapes special characters in text to prevent Markdown rendering issues.
 *
 * @param {string} text - The text to escape.
 * @returns {string} - The escaped text.
 */
function escapeMarkdown(text) {
  if (typeof text !== 'string') return text
  return text
    .replaceAll(/(<)/g, String.raw`\$1`)
    .replaceAll('\n', '<br/>')
    .replaceAll(/`([^`]+)`/g, '<code>{`$1`}</code>')
}

/**
 * Generates the relative filename based on the file path.
 *
 * @param {string} file - The absolute file path.
 * @returns {string} - The relative filename.
 */
function getRelativeFilename(file) {
  let relativePath
  relativePath = file.includes('node_modules')
    ? path.relative(path.join(__dirname, '..', '..'), file).replace('coreui-', '')
    : path.relative(GLOBBY_OPTIONS.cwd, file).replace('coreui-', '')

  // Remove '-pro' from the filename if not a pro component
  const isPro = PRO_COMPONENTS.some((component) => file.includes(component))
  if (!isPro) {
    relativePath = relativePath.replace('-pro', '')
  }

  return relativePath
}

/**
 * Splits the input string by the '|' character, but only when the '|' is outside of any curly braces {} and parentheses ().
 *
 * @param {string} input - The string to be split.
 * @returns {string[]} An array of split parts, trimmed of whitespace.
 * @throws {Error} Throws an error if there are unmatched braces or parentheses in the input.
 */
function splitOutsideBracesAndParentheses(input) {
  if (input.endsWith('...')) {
    return [input]
  }

  const parts = []
  let currentPart = ''
  let braceDepth = 0 // Tracks depth of curly braces {}
  let parenthesisDepth = 0 // Tracks depth of parentheses ()

  for (const char of input) {
    switch (char) {
      case '{': {
        braceDepth++
        break
      }
      case '}': {
        braceDepth--
        if (braceDepth < 0) {
          throw new Error('Unmatched closing curly brace detected.')
        }
        break
      }
      case '(': {
        parenthesisDepth++
        break
      }
      case ')': {
        parenthesisDepth--
        if (parenthesisDepth < 0) {
          throw new Error('Unmatched closing parenthesis detected.')
        }
        break
      }
      case '|': {
        // Split only if not inside any braces or parentheses
        if (braceDepth === 0 && parenthesisDepth === 0 && currentPart.trim()) {
          parts.push(currentPart.trim())
          currentPart = ''
          continue // Skip adding the '|' to currentPart
        }
        break
      }
      default: {
        // No action needed for other characters
        break
      }
    }
    currentPart += char
  }

  // After processing all characters, check for unmatched opening braces or parentheses
  if (braceDepth !== 0) {
    throw new Error('Unmatched opening curly brace detected.')
  }
  if (parenthesisDepth !== 0) {
    throw new Error('Unmatched opening parenthesis detected.')
  }

  // Add the last accumulated part if it's not empty
  if (currentPart.trim()) {
    parts.push(currentPart.trim())
  }

  return parts
}

function replaceText(componenName, keyName, text) {
  const keyNames = Object.keys(TEXT_REPLACEMENTS)

  if (keyNames.includes(componenName)) {
    const replacements = TEXT_REPLACEMENTS[componenName][keyName]
    for (const replacement of replacements) {
      for (const [key, value] of Object.entries(replacement)) {
        if (text && key && value) {
          return text.replaceAll(key, value)
        }
      }
    }
  } else {
    return text
  }
}

/**
 * Creates an MDX file with the component's API documentation.
 *
 * @param {string} file - The absolute path to the component file.
 * @param {object} component - The component information extracted by react-docgen-typescript.
 */
async function createMdx(file, component) {
  if (!component) {
    return
  }

  const filename = path.basename(file, '.tsx')
  const relativeFilename = getRelativeFilename(file)

  // Construct import statements
  let content = `\n\`\`\`jsx\n`
  const importPathParts = relativeFilename.split('/')
  if (importPathParts.length > 1) {
    content += `import { ${component.displayName} } from '@coreui/${importPathParts[0]}'\n`
  }
  content += `// or\n`
  content += `import ${component.displayName} from '@coreui/${relativeFilename.replace('.tsx', '')}'\n`
  content += `\`\`\`\n\n`

  const sortedProps = Object.entries(component.props).sort(([a], [b]) => a.localeCompare(b))

  // Initialize table headers
  for (const [index, [propName, propInfo]] of sortedProps.entries()) {
    const isLast = index === sortedProps.length - 1
    if (index === 0) {
      content += `<div className="table-responsive table-api border rounded mb-3">\n`
      content += `  <table className="table">\n`
      content += `    <thead>\n`
      content += `      <tr>\n`
      content += `        <th>Property</th>\n`
      content += `        <th>Default</th>\n`
      content += `        <th>Type</th>\n`
      content += `      </tr>\n`
      content += `    </thead>\n`
      content += `    <tbody>\n`
    }

    // Skip props from React's type definitions
    if (
      propInfo.parent?.fileName?.includes('@types/react/index.d.ts') ||
      propInfo.parent?.fileName?.includes('@types/react/ts5.0/index.d.ts')
    ) {
      if (isLast) {
        content += `    </tbody>\n`
        content += `  </table>\n`
        content += `</div>\n`
      }

      continue
    }

    // Skip props marked to be ignored
    if (propInfo.tags?.ignore === '') {
      continue
    }

    const displayName = propInfo.name || ''
    const since = propInfo.tags?.since
      ? `<span className="badge bg-success">${propInfo.tags.since}+</span>`
      : ''
    const deprecated = propInfo.tags?.deprecated
      ? `<span className="badge bg-success">Deprecated ${propInfo.tags.since}</span>`
      : ''
    const description = propInfo.description
      ? replaceText(component.displayName, 'description', propInfo.description)
      : '-'

    const type = propInfo.type
      ? propInfo.type.name.includes('ReactElement')
        ? 'ReactElement'
        : propInfo.type.name
      : ''
    const defaultValue = propInfo.defaultValue ? `\`${propInfo.defaultValue.value}\`` : `undefined`
    const example = propInfo.tags?.example
      ? replaceText(component.displayName, 'example', propInfo.tags?.example)
      : false

    // Format types as inline code
    const types = splitOutsideBracesAndParentheses(type)
      .map((_type) => `\`${_type.trim()}\``)
      .join(', ')

    const id = `${component.displayName.toLowerCase()}-${propName}`
    const anchor = `<a href="#${id}" aria-label="${component.displayName} ${displayName} permalink" className="anchor-link after">#</a>`

    content += `      <tr id="${id}">\n`
    content += `        <td className="text-primary fw-semibold">${displayName}${anchor}${since}${deprecated}</td>\n`
    content += `        <td>${escapeMarkdown(defaultValue)}</td>\n`
    content += `        <td>${escapeMarkdown(types)}</td>\n`
    content += `      </tr>\n`
    content += `      <tr>\n`
    content += `        <td colSpan="3">\n`
    content += `          ${converter
      .makeHtml(description)
      .replaceAll(/<code>(.*?)<\/code>/g, '<code>{`$1`}</code>')}\n`

    if (example) {
      content += `        <JSXDocs code={\`${example.trim()}\`} />\n`
    }

    content += `        </td>\n`
    content += `      </tr>\n`

    if (isLast) {
      content += `    </tbody>\n`
      content += `  </table>\n`
      content += `</div>\n`
    }
  }

  // Define the output directory and ensure it exists
  const outputDir = path.join('content', 'api')
  const outputPath = path.join(outputDir, `${filename}.api.mdx`)

  // Create the directory if it doesn't exist
  try {
    await mkdir(outputDir, { recursive: true })
    await writeFile(outputPath, content, { encoding: 'utf8' })
    console.log(`File created: ${filename}.api.mdx`)
  } catch (error) {
    console.error(`Failed to write file ${outputPath}:`, error)
  }
}

/**
 * Main function to execute the script.
 */
async function main() {
  try {
    // Retrieve all matching files based on the glob patterns
    const files = await globby(GLOB_PATTERNS, GLOBBY_OPTIONS)

    // Process each file concurrently
    await Promise.all(
      files.map(async (file) => {
        console.log(`Processing file: ${file}`)
        let components

        try {
          components = parse(file, DOCGEN_OPTIONS)
        } catch (parseError) {
          console.error(`Failed to parse ${file}:`, parseError)
          return
        }

        if (components && components.length > 0) {
          await Promise.all(components.map((component) => createMdx(file, component)))
        }
      }),
    )
  } catch (error) {
    console.error('An error occurred:', error)
    process.exit(1)
  }
}

// Execute the main function
main()
