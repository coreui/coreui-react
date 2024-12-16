import React from 'react'
import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from '@coreui/react'

export const DropdownDark2Example = () => {
  return (
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
        <CCollapse className="navbar-collapse" visible={true}>
          <CNavbarNav>
            <CDropdown dark as="li" variant="nav-item">
              <CDropdownToggle color="dark">Dropdown</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
