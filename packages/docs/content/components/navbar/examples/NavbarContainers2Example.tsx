import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarContainers2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer md>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
