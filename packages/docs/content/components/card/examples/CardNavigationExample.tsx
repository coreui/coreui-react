import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const CardNavigationExample = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>
        <CNav variant="tabs" className="card-header-tabs">
          <CNavItem>
            <CNavLink href="#" active>Active</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled>Disabled</CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton color="primary" href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  )
}
