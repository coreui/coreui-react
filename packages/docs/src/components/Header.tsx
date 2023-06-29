import React, { FC } from 'react'

import CIcon from '@coreui/icons-react'
import {
  cibGithub,
  cibOpenCollective,
  cibTwitter,
  cilCloudDownload,
  cilMenu,
  cilHandshake,
} from '@coreui/icons'

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
              <li className="nav-item py-2 py-lg-1">
                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-body text-opacity-75"></div>
                <hr className="d-lg-none my-2 text-white-50" />
              </li>
            </CHeaderNav>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/react/docs/getting-started/introduction/"
              variant="outline"
            >
              <CIcon className="me-2" icon={cilCloudDownload} /> Download
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/about/services/?docs=coreui-header-button"
              variant="outline"
            >
              <CIcon className="me-2" icon={cilHandshake} /> Hire Us
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
