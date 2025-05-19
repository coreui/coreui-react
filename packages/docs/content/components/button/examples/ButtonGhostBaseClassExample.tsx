import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonGhostBaseClassExample = () => {
  return (
    <>
      <CButton variant="ghost">Base ghost button</CButton>
      <CButton variant="ghost" active>Active state</CButton>
      <CButton variant="ghost" disabled>Disabled state</CButton>
    </>
  )
}
