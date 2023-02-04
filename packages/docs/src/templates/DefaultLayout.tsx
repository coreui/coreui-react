import React, { FC, useState } from 'react'
import { Footer, Header, Sidebar, Seo } from '../components'
import { CContainer } from '@coreui/react/src/'
import DocsLayout from './DocsLayout'

import { AppContext } from '../AppContext'

interface DefaultLayoutProps {
  children: any
  data: any
  pageContext: any
  path: any
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, data, pageContext, path }) => {
  const [sidebarVisible, setSidebarVisible] = useState()

  const title = pageContext.frontmatter ? pageContext.frontmatter.title : ''
  const description = pageContext.frontmatter ? pageContext.frontmatter.description : ''
  const name = pageContext.frontmatter ? pageContext.frontmatter.name : ''
  const route = pageContext.frontmatter ? pageContext.frontmatter.route : ''

  return (
    <AppContext.Provider
      value={{
        sidebarVisible,
        setSidebarVisible,
      }}
    >
      <Seo title={title} description={description} name={name} />
      <Sidebar currentRoute={route} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />
        <div className="body flex-grow-1 px-3">
          {path === '/404/' ? (
            <CContainer lg>{children}</CContainer>
          ) : (
            <DocsLayout data={data} pageContext={pageContext}>
              {children}
            </DocsLayout>
          )}
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

DefaultLayout.displayName = 'DefaultLayout'

export default DefaultLayout
