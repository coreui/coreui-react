const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = async ({ node, loadNodeContent, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: `${slug}`,
    })
  }

  if (node.ext === '.scss') {
    const nodeContent = await loadNodeContent(node)
    createNodeField({ node, name: `content`, value: nodeContent })
  }
}

exports.createPages = async ({ graphql, actions: { createPage, createRedirect }, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
          tableOfContents(maxDepth: 3)
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: `${path.resolve(`./src/templates/MdxLayout.tsx`)}?__contentFilePath=${
          node.internal.contentFilePath
        }`,
        context: { id: node.id },
      })
    })
    createRedirect({
      fromPath: `/`,
      toPath: `/getting-started/introduction/`,
      redirectInBrowser: true,
      isPermanent: true,
    })
  }
}
