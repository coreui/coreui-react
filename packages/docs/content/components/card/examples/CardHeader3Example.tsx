import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

export const CardHeader3Example = () => {
  return (
    <CCard>
      <CCardHeader>Quote</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CCardBody>
    </CCard>
  )
}
