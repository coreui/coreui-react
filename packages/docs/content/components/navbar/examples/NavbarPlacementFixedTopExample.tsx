import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementFixedTopExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="fixed-top">
      <CContainer fluid>
        <CNavbarBrand href="#">Fixed top</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
