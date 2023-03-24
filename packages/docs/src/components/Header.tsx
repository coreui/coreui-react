import React, { FC } from 'react'

import CIcon from '@coreui/icons-react'
import { cibGithub, cibOpenCollective, cibTwitter, cilCloudDownload, cilMenu } from '@coreui/icons'

import { CButton, CHeader, CHeaderNav, CHeaderToggler, CNavItem } from '@coreui/react/src'
import { AppContext } from './../AppContext'

const Header: FC = () => {
  return (
    <>
      <AppContext.Consumer>
        {(context) => (
          <CHeader className="mb-5" position="sticky">
            <CHeaderToggler
              className="ms-md-3"
              onClick={() => {
                context.setSidebarVisible && context.setSidebarVisible(!context.sidebarVisible)
              }}
            >
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <div className="docs-search" id="docsearch"></div>
            <CHeaderNav className="ms-auto">
              <CNavItem
                href="https://github.com/coreui/coreui-react/"
                aria-label="Visit our GitHub"
              >
                <CIcon icon={cibGithub} size="xl" />
              </CNavItem>
              <CNavItem href="https://twitter.com/core_ui" aria-label="Visit our Twitter">
                <CIcon icon={cibTwitter} size="xl" />
              </CNavItem>
              <CNavItem
                href="https://opencollective.com/coreui"
                aria-label="Visit our OpenCollective"
              >
                <CIcon icon={cibOpenCollective} size="xl" />
              </CNavItem>
            </CHeaderNav>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/react/docs/getting-started/introduction/"
              variant="outline"
            >
              <CIcon icon={cilCloudDownload} /> Download
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/pricing/?framework=react&docs=coreui-header-button"
            >
              Get CoreUI PRO
            </CButton>
          </CHeader>
        )}
      </AppContext.Consumer>
    </>
  )
}

Header.displayName = 'Header'

export default Header
