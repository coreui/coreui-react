import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

export const CardHeaderExample = () => {
  return (
    <CCard>
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
    </CCard>
  )
}
