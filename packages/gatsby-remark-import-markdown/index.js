/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const fs = require('fs')
const normalizePath = require('normalize-path')
const visit = require('unist-util-visit')
const unified = require('unified')
const parse = require('remark-parse')
const remarkGfm = require('remark-gfm')
const html = require('remark-html')

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  const directory = pluginOptions.directory

  if (!directory) {
    throw Error(`Required option \"directory\" not specified`)
  } else if (!fs.existsSync(directory)) {
    throw Error(`Invalid directory specified \"${directory}\"`)
  } else if (!directory.endsWith('/')) {
    directory += '/'
  }

  visit(markdownAST, 'inlineCode', (node, _, parent) => {
    const value = node.value

    if (value.startsWith('markdown:')) {
      const file = value.substr(9)
      const path = normalizePath('' + directory + file)

      if (!fs.existsSync(path)) {
        throw Error(`Invalid fragment specified; no such file "${path}"`)
      }

      const code = fs.readFileSync(path, 'utf8')
      const markdown = unified()
        .use(parse)
        .use(remarkGfm)
        .use(html, { sanitize: false })
        .parse(code)

      parent.type = 'div'
      parent.children = []

      markdown.children.forEach((child) => {
        delete child.position
        parent.children.push(child)
      })
    }
  })

  // visit(markdownAST, 'code', (node) => {
  //   if (node.meta && node.meta.includes('preview')) {
  //     const value = node.value
  //     const className = /className="(.*)"/.test(node.meta) ? RegExp.$1 : ''
  //     const tree = fromMarkdown(value.replace(/(\r\n|\n|\r)/gm, ''), {
  //       extensions: [syntax({ acorn: acorn, addResult: true }), mdxMd],
  //       mdastExtensions: [mdxJsx.fromMarkdown],
  //     })

  //     delete node.value
  //     delete node.position
  //     delete node.lang
  //     delete node.meta

  //     node.type = 'div'
  //     node.children = [
  //       {
  //         type: 'mdxJsxFlowElement',
  //         name: 'Example',
  //         attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
  //         children:
  //           tree.children[0].type === 'paragraph'
  //             ? tree.children[0].children.map((child) => child)
  //             : tree.children.map((child) => child),
  //       },
  //       {
  //         type: 'code',
  //         lang: 'jsx',
  //         value: value,
  //       },
  //     ]
  //   }
  // })

  return markdownAST
}
