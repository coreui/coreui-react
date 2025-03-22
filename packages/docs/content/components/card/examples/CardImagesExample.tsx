import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'

export const CardImagesExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src="../../images/react.jpg" />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
      </CCardBody>
    </CCard>
  )
}
