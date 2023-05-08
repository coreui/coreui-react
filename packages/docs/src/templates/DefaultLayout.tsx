import React, { FC, useEffect, useState } from 'react'
import { Footer, Header, Sidebar, Seo } from '../components'
import { CContainer } from '@coreui/react/src/'
import DocsLayout from './DocsLayout'

import { AppContext } from '../AppContext'
import { Script } from 'gatsby'

interface DefaultLayoutProps {
  children: any
  data: any
  pageContext: any
  path: any
}

const getPreferredTheme = (storedTheme: string | undefined) => {
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme: string) => {
  document.documentElement.dataset.coreuiTheme =
    theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : theme
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, data, pageContext, path }) => {
  const theme = 'coreui-react-docs-theme'
  const [sidebarVisible, setSidebarVisible] = useState()
  const [storedTheme, setStoredTheme] = useState()

  useEffect(() => {
    if (typeof localStorage.getItem(theme) === 'string') {
      setStoredTheme(localStorage.getItem(theme))
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme(storedTheme))
      }
    })
  }, [])

  const title = pageContext.frontmatter ? pageContext.frontmatter.title : ''
  const description = pageContext.frontmatter ? pageContext.frontmatter.description : ''
  const name = pageContext.frontmatter ? pageContext.frontmatter.name : ''
  const route = pageContext.frontmatter ? pageContext.frontmatter.route : ''

  useEffect(() => {
    if (storedTheme) {
      localStorage.setItem(theme, storedTheme)
      setTheme(storedTheme)
    }
  }, [storedTheme])

  return (
    <AppContext.Provider
      value={{
        sidebarVisible,
        setSidebarVisible,
        storedTheme,
        setStoredTheme,
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
