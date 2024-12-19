import React from 'react'
import { CCard, CCardImage, CCardImageOverlay, CCardText, CCardTitle } from '@coreui/react'

import ReactImg from '@assets/images/react.jpg'

export const CardImageOverlaysExample = () => {
  return (
    <CCard className="mb-3 bg-dark text-white">
      <CCardImage src={ReactImg} />
      <CCardImageOverlay className="d-flex flex-column align-items-center justify-content-center">
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
        <CCardText>Last updated 3 mins ago</CCardText>
      </CCardImageOverlay>
    </CCard>
  )
}
