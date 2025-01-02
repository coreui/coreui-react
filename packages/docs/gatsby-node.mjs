import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createFilePath } from 'gatsby-source-filesystem'
import { glob } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions

  // Find all 'examples' directories
  const examplePaths = glob.sync(resolve(__dirname, 'content/**/**/examples'))

  // Create Webpack alias
  setWebpackConfig({
    resolve: {
      alias: {
        '@coreui/react': resolve(__dirname, '..', 'coreui-react/src/index.ts'),
        '@example': examplePaths, // Adds all paths to a single alias
      },
    },
  })
}

export const onCreateNode = async ({
  node,
  loadNodeContent,
  actions: { createNodeField },
  getNode,
}) => {
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
    createNodeField({
      node,
      name: `content`,
      value: nodeContent,
    })
  }
}

export const createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
  reporter,
}) => {
  const result = await graphql(`
    query {
      allMdx(filter: { fields: { slug: { regex: "/^(?!/api/).*/" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            route
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
        component: `${resolve(`./src/templates/MdxLayout.tsx`)}?__contentFilePath=${
          node.internal.contentFilePath
        }`,
        context: {
          id: node.id,
          route: node.frontmatter.route,
          regex: `/^${node.frontmatter.route}/`,
        },
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
