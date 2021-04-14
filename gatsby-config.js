module.exports = {
  siteMetadata: {
    siteUrl: `https://coreui.io/`,
  },
  plugins: [
    'gatsby-plugin-sass',
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
  ],
}
