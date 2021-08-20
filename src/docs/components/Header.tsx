import React, { FC } from 'react'

import { CHeader, CHeaderNav, CNavItem } from '../../index'
import CIcon from '@coreui/icons-react'
import { cibDiscourse, cibGithub, cibTwitter, cilCloudDownload } from '@coreui/icons'
import { CButton } from '../../components/button/CButton'

const Header: FC = ({ ...props }) => {
  return (
    <CHeader className="mb-5">
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
        href="#"
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
  )
}

Header.displayName = 'Header'

export default Header
