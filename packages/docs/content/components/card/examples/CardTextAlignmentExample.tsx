import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardTextAlignmentExample = () => {
  return (
    <>
      <CCard className="mb-3" style={{ width: '18rem' }}>
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
      <CCard className="mb-3 text-center" style={{ width: '18rem' }}>
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
      <CCard className="text-end" style={{ width: '18rem' }}>
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
    </>
  )
}
