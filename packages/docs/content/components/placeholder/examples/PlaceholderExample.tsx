import React from 'react'
import { withPrefix } from 'gatsby'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CPlaceholder,
} from '@coreui/react'

export const PlaceholderExample = () => {
  return (
    <>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={withPrefix('/images/react.jpg')} />
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
      <CCard style={{ width: '18rem' }}>
        <CCardImage
          as="svg"
          orientation="top"
          width="100%"
          height="162"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </CCardImage>
        <CCardBody>
          <CPlaceholder as={CCardTitle} animation="glow" xs={7}>
            <CPlaceholder xs={6} />
          </CPlaceholder>
          <CPlaceholder as={CCardText} animation="glow">
            <CPlaceholder xs={7} />
            <CPlaceholder xs={4} />
            <CPlaceholder xs={4} />
            <CPlaceholder xs={6} />
            <CPlaceholder xs={8} />
          </CPlaceholder>
          <CPlaceholder as={CButton} color="primary" disabled href="#" tabIndex={-1} xs={6} />
        </CCardBody>
      </CCard>
    </>
  )
}
