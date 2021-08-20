module.exports = {
  siteMetadata: {
    title: `CoreUI for React.js`,
    titleTemplate: '%s · React UI Components · CoreUI ',
    description: `CoreUI for React.js is UI Component library written in TypeScript, and ready for your next React.js project.`,
    url: `https://coreui.io/react/docs/`,
    image: '', // Path to your image you placed in the 'static' folder
    twitterUsername: '@coreui_io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve('./src/docs/templates/Docs.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            // resolve: `gatsby-remark-embed-markdown`,
            resolve: require.resolve('./src/docs/plugins/gatsby-remark-embed-markdown'),
            options: {
              directory: `${__dirname}/api/`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/docs/`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap-react.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-118965717-1', // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-autolink-headers`],
    //   },
    // },
  ],
}
