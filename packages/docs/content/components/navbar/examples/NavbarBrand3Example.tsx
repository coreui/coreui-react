import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

import CoreUISignetImg from '@assets/images/brand/coreui-signet.svg'

export const NavbarBrand3Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img
            src={CoreUISignetImg}
            alt=""
            width="22"
            height="24"
            className="d-inline-block align-top"
          />{' '}
          CoreUI
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
