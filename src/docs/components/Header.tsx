import React, { FC } from 'react'

import { CHeader, CHeaderNav, CHeaderToggler, CNavItem } from '../../index'
import CIcon from '@coreui/icons-react'
import { cibDiscourse, cibGithub, cibTwitter, cilCloudDownload, cilMenu } from '@coreui/icons'
import { CButton } from '../../components/button/CButton'

import { myContext } from './../templates/Docs'

const Header: FC = ({ ...props }) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <CHeader className="mb-5">
          <CHeaderToggler
            className="ms-md-3"
            onClick={() => context.setSidebarVisible(!context.sidebarVisible)}
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
  )
}

Header.displayName = 'Header'

export default Header
