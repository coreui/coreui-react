import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'

import ReactImg from '@assets/images/react.jpg'

export const CardGroups2Example = () => {
  return (
    <CCardGroup>
      <CCard>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
    </CCardGroup>
  )
}
