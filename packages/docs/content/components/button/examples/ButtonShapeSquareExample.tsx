import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapeSquareExample = () => {
  return (
    <>
      <CButton color="primary" className="rounded-0">Primary</CButton>
      <CButton color="secondary" className="rounded-0">Secondary</CButton>
      <CButton color="success" className="rounded-0">Success</CButton>
      <CButton color="danger" className="rounded-0">Danger</CButton>
      <CButton color="warning" className="rounded-0">Warning</CButton>
      <CButton color="info" className="rounded-0">Info</CButton>
      <CButton color="light" className="rounded-0">Light</CButton>
      <CButton color="dark" className="rounded-0">Dark</CButton>
      <CButton color="link" className="rounded-0">Link</CButton>
    </>
  )
}
