import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementStickyTopExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="sticky-top">
      <CContainer fluid>
        <CNavbarBrand href="#">Sticky top</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
