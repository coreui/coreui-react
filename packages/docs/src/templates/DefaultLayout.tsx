import React, { FC, useState } from 'react'
import { Footer, Header, Sidebar } from '../components'
import { CContainer } from '@coreui/react/src/'
import DocsLayout from './DocsLayout'

import { AppContext } from '../AppContext'

interface DefaultLayoutProps {
  children: any // eslint-disable-line @typescript-eslint/no-explicit-any
  data: any // eslint-disable-line @typescript-eslint/no-explicit-any
  location: any // eslint-disable-line @typescript-eslint/no-explicit-any
  pageContext: any // eslint-disable-line @typescript-eslint/no-explicit-any
  path: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, data, location, pageContext, path }) => {
  const [sidebarVisible, setSidebarVisible] = useState()
  return (
    <AppContext.Provider
      value={{
        sidebarVisible,
        setSidebarVisible,
      }}
    >
      <Sidebar />
      <div className="wrapper flex-grow-1">
        <Header />
        {path === '/404/' ? (
          <CContainer lg>{children}</CContainer>
        ) : (
          <DocsLayout data={data} location={location} pageContext={pageContext}>
            {children}
          </DocsLayout>
        )}
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

DefaultLayout.displayName = 'DefaultLayout'

export default DefaultLayout
