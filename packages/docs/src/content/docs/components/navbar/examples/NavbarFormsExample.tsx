import React from 'react'
import { CButton, CContainer, CForm, CFormInput, CNavbar } from '@coreui/react'

export const NavbarFormsExample = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </CContainer>
    </CNavbar>
  )
}
