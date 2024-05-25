import { is } from 'unist-util-is'
import { visit } from 'unist-util-visit'

const importNodes = {
  data: {
    estree: {
      body: [
        {
          source: {
            raw: "'@coreui/react'",
            type: 'Literal',
            value: '@coreui/react',
          },
          specifiers: [
            {
              local: { name: 'CTab', type: 'Identifier' },
              imported: { name: 'CTab', type: 'Identifier' },
              type: 'ImportSpecifier',
            },
          ],
          type: 'ImportDeclaration',
        },
        {
          source: {
            raw: "'@coreui/react'",
            type: 'Literal',
            value: '@coreui/react',
          },
          specifiers: [
            {
              local: { name: 'CTabContent', type: 'Identifier' },
              imported: { name: 'CTabContent', type: 'Identifier' },
              type: 'ImportSpecifier',
            },
          ],
          type: 'ImportDeclaration',
        },
        {
          source: {
            raw: "'@coreui/react'",
            type: 'Literal',
            value: '@coreui/react',
          },
          specifiers: [
            {
              local: { name: 'CTabPanel', type: 'Identifier' },
              imported: { name: 'CTabPanel', type: 'Identifier' },
              type: 'ImportSpecifier',
            },
          ],
          type: 'ImportDeclaration',
        },
        {
          source: {
            raw: "'@coreui/react'",
            type: 'Literal',
            value: '@coreui/react',
          },
          specifiers: [
            {
              local: { name: 'CTabList', type: 'Identifier' },
              imported: { name: 'CTabList', type: 'Identifier' },
              type: 'ImportSpecifier',
            },
          ],
          type: 'ImportDeclaration',
        },
        {
          source: {
            raw: "'@coreui/react'",
            type: 'Literal',
            value: '@coreui/react',
          },
          specifiers: [
            {
              local: { name: 'CTabs', type: 'Identifier' },
              imported: { name: 'CTabs', type: 'Identifier' },
              type: 'ImportSpecifier',
            },
          ],
          type: 'ImportDeclaration',
        },
      ],
      type: 'Program',
    },
  },
  type: 'mdxjsEsm',
  value: "import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react';",
}

function parseMeta(nodeMeta) {
  const parsedMeta = { span: 1 }
  const tabTag = nodeMeta.match(/tab(={.+})?/g)

  if (tabTag == null) {
    return null
  }

  const tabMeta = tabTag[0].split('=')[1]

  if (tabMeta == null) {
    return parsedMeta
  }

  return { ...parsedMeta, ...JSON.parse(tabMeta) }
}

function createTabs(tabNodes, { labels }) {
  const tabNavContentChildren = tabNodes.map(([nodes, meta], index) => {
    const lang = nodes[0].lang
    const label = meta.label ?? labels.get(lang)

    return {
      attributes: [
        {
          name: 'itemKey',
          type: 'mdxJsxAttribute',
          value: index,
        },
      ],
      children: [{ type: 'text', value: label }],
      name: 'CTab',
      type: 'mdxJsxFlowElement',
    }
  })

  const tabContentChildren = tabNodes.map(([nodes], index) => {
    return {
      attributes: [
        {
          name: 'itemKey',
          type: 'mdxJsxAttribute',
          value: index,
        },
      ],
      children: nodes,
      name: 'CTabPanel',
      type: 'mdxJsxFlowElement',
    }
  })

  return {
    attributes: [{ name: 'activeItemKey', type: 'mdxJsxAttribute', value: 0 }],
    children: [
      {
        attributes: [
          {
            name: 'variant',
            type: 'mdxJsxAttribute',
            value: 'underline-border',
          },
        ],
        children: tabNavContentChildren,
        name: 'CTabList',
        type: 'mdxJsxFlowElement',
      },
      {
        attributes: [{ name: 'className', type: 'mdxJsxAttribute', value: 'mb-3' }],
        children: tabContentChildren,
        name: 'CTabContent',
        type: 'mdxJsxFlowElement',
      },
    ],
    name: 'CTabs',
    type: 'mdxJsxFlowElement',
  }
}

function collectTabNodes(parent, index) {
  let node = parent.children[index]
  const tabNodes = []

  do {
    if (is(node, 'code') && typeof node.meta === 'string') {
      const meta = parseMeta(node.meta)

      if (meta == null) {
        break
      }

      const spanItems = []

      while (spanItems.length < meta.span && is(node, 'code')) {
        spanItems.push(node)

        index++
        node = parent.children[index]
      }

      tabNodes.push([spanItems, meta])
    } else {
      break
    }
  } while (index <= parent.children.length)

  if (tabNodes.length === 0) {
    return null
  }

  return tabNodes
}

function resolveConfig(options) {
  return {
    labels: new Map([['js', 'JavaScript'], ['ts', 'TypeScript'], ...(options.labels || [])]),
  }
}

function plugin(options = {}) {
  const config = resolveConfig(options)

  return function transformer(tree) {
    let hasTabs = false
    let includesImportTabs = false

    visit(tree, ['code', 'mdxjsEsm'], (node, index, parent) => {
      if (is(node, 'mdxjsEsm') && node.value.includes('@coreui/react')) {
        includesImportTabs = true

        return
      }

      const tabNodes = collectTabNodes(parent, index)

      if (tabNodes == null) {
        return
      }

      hasTabs = true

      const tabs = createTabs(tabNodes, config)

      const replacedCount = tabNodes.reduce((nodesCount, [nodes]) => nodesCount + nodes.length, 0)

      parent.children.splice(index, replacedCount, tabs)
    })

    if (hasTabs && !includesImportTabs) {
      tree.children.unshift(importNodes)
    }
  }
}

export default plugin
