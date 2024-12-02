/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires, unicorn/prefer-module */
const acorn = require('acorn')
const fromMarkdown = require('mdast-util-from-markdown')
const mdxJsx = require('mdast-util-mdx-jsx')
const mdxMd = require('micromark-extension-mdx-md')
const syntax = require('micromark-extension-mdx-jsx')
const visit = require('unist-util-visit')

// eslint-disable-next-line unicorn/no-anonymous-default-export
module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'code', (node) => {
    if (node.meta && node.meta.includes('preview')) {
      const value = node.value
      const className = /className="(.*)"/.test(node.meta) ? RegExp.$1 : ''
      const tree = fromMarkdown(value.replaceAll(/(\r\n|\n|\r)/gm, ''), {
        extensions: [syntax({ acorn: acorn, addResult: true }), mdxMd],
        mdastExtensions: [mdxJsx.fromMarkdown],
      })

      delete node.value
      delete node.position
      delete node.lang
      delete node.meta

      node.type = 'div'
      node.data = { hProperties: { className: ['docs-example-snippet docs-code-snippet'] } }
      node.children = [
        {
          type: 'mdxJsxFlowElement',
          name: 'Example',
          attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
          children:
            tree.children[0].type === 'paragraph'
              ? tree.children[0].children.map((child) => child)
              : tree.children.map((child) => child),
        },
        {
          type: 'code',
          lang: 'jsx',
          value: value,
        },
      ]
    }
  })

  return markdownAST
}
