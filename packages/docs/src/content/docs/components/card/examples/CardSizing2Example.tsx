import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardSizing2Example = () => {
  return (
    <>
      <CCard className="w-75 mb-3">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="w-50">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </>
  )
}
