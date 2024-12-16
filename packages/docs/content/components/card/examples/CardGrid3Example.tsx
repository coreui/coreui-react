import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

import ReactImg from '@assets/images/react.jpg'

export const CardGrid3Example = () => {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
