import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrand3Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img
            src="../../images/brand/coreui-signet.svg"
            alt="CoreUI Signet"
            width="22"
            height="24"
          />{' '}
          CoreUI
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
