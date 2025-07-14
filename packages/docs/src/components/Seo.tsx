import React from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  name?: string
  image?: string
  article?: string
  pro?: boolean
}

const SEO = ({ title, description, name, image, article, pro }: SEOProps) => {
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

  const humanize = (text: string): string => {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const breadcrumbList = (startIndex = 1) => {
    return seo.url
      .replace('docs//', 'docs/')
      .replace(siteUrl, '')
      .split('/')
      .filter(Boolean)
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + startIndex,
        name: humanize(item),
        item: `${siteUrl}${item}`,
      }))
  }

  const getDynamicDescription = (pathname: string, name?: string): string => {
    if (pathname.includes('/components/') && pathname.includes('api')) {
      return `Complete guide to CoreUI React ${name} API documentation. Learn how to use the CoreUI React ${name} component, its properties, methods, and events.`
    }

    if (pathname.includes('/components/') && pathname.includes('bootstrap')) {
      return `Complete guide to CoreUI React ${name} usage with Bootstrap 5. Learn how to use the CoreUI React ${name} component with Bootstrap 5, including its properties, methods, and events.`
    }

    if (pathname.includes('/components/') && pathname.includes('styling')) {
      return `Complete guide to CoreUI React ${name} component styling. Learn how to customize the CoreUI React ${name} component styles, themes, and appearance.`
    }

    if (pathname.includes('/components/')) {
      return `Complete guide to CoreUI React ${name} components and implementation. Learn how to use the CoreUI React ${name} component in your React.js application.`
    }

    if (pathname.includes('/customize/')) {
      return `Complete guide to CoreUI React customization and theming. Learn how to customize CoreUI React components, styles, and themes to fit your project's needs.`
    }

    if (pathname.includes('/forms/')) {
      return `Complete guide to CoreUI React ${name} components and implementation.`
    }

    if (pathname.includes('/layouts/')) {
      return `Complete guide to CoreUI React ${name} implementation.`
    }

    if (pathname.includes('/templates/')) {
      return 'Complete guide to CoreUI React Templates. Learn how to download, install, customize, and use CoreUI React templates.'
    }

    if (pathname.includes('/migration/')) {
      return 'Complete guide to CoreUI React migration. Track and review changes to the CoreUI for React.js components to help you migrate to the latest version.'
    }

    return 'Complete guide to CoreUI for React.js components and implementation.'
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'CoreUI',
          item: 'https://coreui.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'React',
          item: 'https://coreui.io/react/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Documentation',
          item: siteUrl,
        },
        ...breadcrumbList(4),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: `${seo.title} documentation`,
      description: getDynamicDescription(seo.url, name),
      author: {
        '@type': 'Organization',
        name: 'CoreUI Team',
        sameAs: 'https://github.com/coreui/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CoreUI',
        logo: {
          '@type': 'ImageObject',
          url: 'https://coreui.io/images/brand/coreui-logo.svg',
        },
      },
      datePublished: '2021-01-13',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': seo.url.replace('docs//', 'docs/'),
      },
      version: pro ? '5.17.1' : '5.7.1',
      proficiencyLevel: 'Beginner',
    },
  ]

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
      {seo.name && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
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
