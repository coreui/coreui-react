import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementFixedBottomExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="fixed-bottom">
      <CContainer fluid>
        <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
