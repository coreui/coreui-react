import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { CButton } from '@coreui/react'

import Seo from '../components/Seo'

const NotFoundPage = () => {
  const { site } = useStaticQuery(query)
  const { siteUrl } = site.siteMetadata
  return (
    <>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <CButton color="primary" href={siteUrl}>
        Go to documentation
      </CButton>
    </>
  )
}

export default NotFoundPage

const query = graphql`
  query URL {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
  }
`
