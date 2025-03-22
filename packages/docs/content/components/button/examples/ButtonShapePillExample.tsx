import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapePillExample = () => {
  return (
    <>
      <CButton color="primary" className="rounded-pill">Primary</CButton>
      <CButton color="secondary" className="rounded-pill">Secondary</CButton>
      <CButton color="success" className="rounded-pill">Success</CButton>
      <CButton color="danger" className="rounded-pill">Danger</CButton>
      <CButton color="warning" className="rounded-pill">Warning</CButton>
      <CButton color="info" className="rounded-pill">Info</CButton>
      <CButton color="light" className="rounded-pill">Light</CButton>
      <CButton color="dark" className="rounded-pill">Dark</CButton>
      <CButton color="link" className="rounded-pill">Link</CButton>
    </>
  )
}
