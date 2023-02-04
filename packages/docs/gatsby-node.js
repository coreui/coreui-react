const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: `${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
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
