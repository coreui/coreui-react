/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires, unicorn/prefer-module */
const fs = require('node:fs')
const path = require('node:path')
const normalizePath = require('normalize-path')
const visitParents = require('unist-util-visit-parents') // Ensure you have installed this
const unified = require('unified')
const parse = require('remark-parse')
const remarkGfm = require('remark-gfm')

/**
 * Plugin Options Interface
 * @typedef {Object} PluginOptions
 * @property {string} directory - The directory containing markdown fragments
 */

/**
 * Main plugin function
 * @param {Object} param0 - Object containing the markdown AST
 * @param {Object} [pluginOptions={}] - Plugin options
 * @param {PluginOptions} pluginOptions.directory - Required directory option
 * @returns {Object} - The transformed markdown AST
 */
// eslint-disable-next-line unicorn/no-anonymous-default-export
module.exports = ({ markdownAST }, pluginOptions = {}) => {
  const { directory } = pluginOptions

  validateDirectory(directory)

  const normalizedDirectory = ensureTrailingSlash(normalizeDirectory(directory))

  const processor = unified().use(parse).use(remarkGfm)

  visitParents(markdownAST, 'inlineCode', (node, ancestors) => {
    processInlineCodeNode(node, ancestors, normalizedDirectory, processor)
  })

  return markdownAST
}

/**
 * Validates the directory option
 * @param {string} directory - The directory to validate
 */
function validateDirectory(directory) {
  if (!directory) {
    throw new Error(`Required option "directory" not specified`)
  }

  if (!fs.existsSync(directory)) {
    throw new Error(`Invalid directory specified "${directory}"`)
  }
}

/**
 * Normalizes the directory path
 * @param {string} directory - The directory path to normalize
 * @returns {string} - The normalized directory path
 */
function normalizeDirectory(directory) {
  return path.resolve(directory)
}

/**
 * Ensures the directory path ends with a trailing slash
 * @param {string} directory - The directory path
 * @returns {string} - The directory path with a trailing slash
 */
function ensureTrailingSlash(directory) {
  return directory.endsWith(path.sep) ? directory : `${directory}${path.sep}`
}

/**
 * Processes an inline code node that starts with 'markdown:'
 * @param {Object} node - The AST node
 * @param {Array} ancestors - Ancestor nodes
 * @param {string} directory - The base directory for markdown fragments
 * @param {Object} processor - Unified processor instance
 */
function processInlineCodeNode(node, ancestors, directory, processor) {
  const { value } = node

  if (!value.startsWith('markdown:')) {
    return
  }

  const fileName = value.slice('markdown:'.length).trim()

  if (!fileName) {
    throw new Error('Inline code starting with "markdown:" must specify a file name')
  }

  const filePath = normalizePath(path.join(directory, fileName))

  if (!fs.existsSync(filePath)) {
    throw new Error(`Invalid fragment specified; no such file "${filePath}"`)
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const parsed = processor.parse(
    fileContent.replaceAll('className="', 'class="').replaceAll('{`', '').replaceAll('`}', ''),
  )

  removePositionData(parsed)

  replaceParentNodeWithParsedContent(ancestors, parsed.children)
}

/**
 * Removes position information from AST nodes to avoid conflicts
 * @param {Object} parsed - The parsed AST
 */
function removePositionData(parsed) {
  if (!parsed.children) return

  parsed.children.forEach((child) => {
    if (child.position) {
      delete child.position
    }
  })
}

/**
 * Replaces the parent node with the new array of nodes from the parsed content
 * @param {Array} ancestors - Ancestor nodes
 * @param {Array} newChildren - New child nodes to insert
 */
function replaceParentNodeWithParsedContent(ancestors, newChildren) {
  const parent = ancestors.at(-1)
  const grandparent = ancestors.at(-2)

  if (!grandparent || !Array.isArray(grandparent.children)) {
    throw new Error('Parent node does not have a grandparent with children')
  }

  const parentIndex = grandparent.children.indexOf(parent)

  if (parentIndex === -1) {
    throw new Error("Parent node not found in grandparent's children")
  }

  // Replace the parent node with the new nodes
  grandparent.children.splice(parentIndex, 1, ...newChildren)
}
