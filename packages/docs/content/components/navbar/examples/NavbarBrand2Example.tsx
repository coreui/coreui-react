import React from 'react'
import { withPrefix } from 'gatsby'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrand2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img
            src={withPrefix('/images/brand/coreui-signet.svg')}
            alt="CoreUI Signet"
            width="22"
            height="24"
          />
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
