import remarkGfm from 'remark-gfm'
import remarkCodeTabs from 'remark-code-tabs'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: `CoreUI for React.js`,
    titleTemplate: `%s · React UI Components · CoreUI `,
    description: `CoreUI for React.js is UI Component library written in TypeScript, and ready for your next React.js project.`,
    author: `@coreui_io`,
    url: `https://coreui.io/react/docs/`,
    siteUrl: `https://coreui.io/react/docs/`,
    image: ``, // Path to your image you placed in the `static` folder
    twitterUsername: `@coreui_io`,
  },
  pathPrefix: `/react/docs/`,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/assets/images/brand/icon.png`,
        name: `CoreUI for React.js`,
        short_name: `CoreUI for React.js`,
        start_url: `https://coreui.io/react/`,
        background_color: `#fff`,
        theme_color: `#321fdb`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scss`,
        path: `./../../node_modules/@coreui/coreui/scss/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkCodeTabs],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-import-markdown`,
            options: {
              directory: `${__dirname}/content/api/`,
            },
          },
          `gatsby-remark-jsx-preview`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-link`,
              icon: `<span>#</span>`,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap-react.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KX4JH47`,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    },
  ],
}

export default config
