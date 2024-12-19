import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CCardTitle,
} from '@coreui/react'

export const CardHeaderAndFooterExample = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
      <CCardFooter className="text-body-secondary">2 days ago</CCardFooter>
    </CCard>
  )
}
