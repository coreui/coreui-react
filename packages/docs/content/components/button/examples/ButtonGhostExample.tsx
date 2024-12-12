import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonGhostExample = () => {
  return (
    <>
      <CButton color="primary" variant="ghost">Primary</CButton>
      <CButton color="secondary" variant="ghost">Secondary</CButton>
      <CButton color="success" variant="ghost">Success</CButton>
      <CButton color="danger" variant="ghost">Danger</CButton>
      <CButton color="warning" variant="ghost">Warning</CButton>
      <CButton color="info" variant="ghost">Info</CButton>
      <CButton color="light" variant="ghost">Light</CButton>
      <CButton color="dark" variant="ghost">Dark</CButton>
    </>
  )
}
