import React from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  name?: string
  image?: string
  article?: string
}

const SEO = ({ title, description, name, image, article }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const prefix = site.pathPrefix

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    name: name,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname.replace(`${prefix}/`, '')}`,
  }

  const formattedTitle = title ? titleTemplate.replace('%s', title) : 'My Gatsby Site'

  return (
    <>
      <title>{formattedTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url.replace('docs//', 'docs/')} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.name && (
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "React",
              "item": "${siteUrl}"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "${seo.name}",
              "item": "${seo.url.replace('docs//', 'docs/')}"
            }]
          }`}
        </script>
      )}
    </>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
      pathPrefix
    }
  }
`
