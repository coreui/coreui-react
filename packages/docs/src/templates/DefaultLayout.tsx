import React, { FC, useEffect, useState } from 'react'
import { Footer, Header, Sidebar, Seo } from '../components'
import { CContainer } from '@coreui/react/src/'
import DocsLayout from './DocsLayout'

import { AppContext } from '../AppContext'
import { Script } from 'gatsby'

interface DefaultLayoutProps {
  children: any // eslint-disable-line @typescript-eslint/no-explicit-any
  data: any // eslint-disable-line @typescript-eslint/no-explicit-any
  pageContext: any // eslint-disable-line @typescript-eslint/no-explicit-any
  path: any // eslint-disable-line @typescript-eslint/no-explicit-any
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
      <Script
        src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"
        onLoad={() => {
          const searchElement = document.getElementById('docsearch')

          // @ts-expect-error global variable
          if (!window.docsearch || !searchElement) {
            return
          }

          // @ts-expect-error global variable
          window.docsearch({
            appId: 'JIOZIZPLMM',
            apiKey: '6e3f7692d2589d042bb40426b75df1b7',
            indexName: 'coreui-react',
            container: searchElement,
            // Set debug to `true` if you want to inspect the dropdown
            debug: true,
          })
        }}
      />

      <script type="text/javascript"></script>
    </AppContext.Provider>
  )
}

DefaultLayout.displayName = 'DefaultLayout'

export default DefaultLayout
