import React, { FC } from 'react'
import GitHubButton from 'react-github-btn'

import { CAlert, CHeader, CHeaderNav, CHeaderToggler, CNavItem } from '../../index'
import CIcon from '@coreui/icons-react'
import { cibDiscourse, cibGithub, cibTwitter, cilCloudDownload, cilMenu } from '@coreui/icons'
import { CButton } from '../../components/button/CButton'

import { myContext } from './../templates/Docs'

const Header: FC = ({ ...props }) => {
  return (
    <>
      <CAlert color="light" className="d-flex justify-content-center rounded-0 border-bottom mb-0">
        <span className="me-3">
          If you like this project and want to help us, please give us a star ⭐️ on Github. ➡️
        </span>
        <GitHubButton
          href="https://github.com/coreui/coreui-react"
          data-size="large"
          aria-label="Star coreui/coreui-react on GitHub"
        >
          Star
        </GitHubButton>
        <span className="ms-3">🙏</span>
      </CAlert>
      <myContext.Consumer>
        {(context) => (
          <CHeader className="mb-5" position="sticky">
            <CHeaderToggler
              className="ms-md-3"
              onClick={() => {
                context.setSidebarVisible(!context.sidebarVisible)
              }}
            >
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <CHeaderNav className="ms-auto">
              <CNavItem href="https://community.coreui.io/">
                <CIcon icon={cibDiscourse} size="xl" />
              </CNavItem>
              <CNavItem href="https://github.com/coreui">
                <CIcon icon={cibGithub} size="xl" />
              </CNavItem>
              <CNavItem href="https://twitter.com/core_ui">
                <CIcon icon={cibTwitter} size="xl" />
              </CNavItem>
            </CHeaderNav>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/react/#compare"
              variant="outline"
            >
              <CIcon icon={cilCloudDownload} /> Download
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/pro/react/"
            >
              Get CoreUI PRO
            </CButton>
          </CHeader>
        )}
      </myContext.Consumer>
    </>
  )
}

Header.displayName = 'Header'

export default Header
