import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src="../../images/react.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
