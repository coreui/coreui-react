import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarContainersExample = () => {
  return (
    <CContainer>
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </CContainer>
  )
}
