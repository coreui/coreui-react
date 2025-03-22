import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardImageCapsExample = () => {
  return (
    <>
      <CCard className="mb-3">
        <CCardImage orientation="top" src="../../images/react.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard className="mb-3">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
        <CCardImage orientation="bottom" src="../../images/react.jpg" />
      </CCard>
    </>
  )
}
