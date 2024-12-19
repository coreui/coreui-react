import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementExample = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Default</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
