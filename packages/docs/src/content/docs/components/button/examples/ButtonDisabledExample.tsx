import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabledExample = () => {
  return (
    <>
      <CButton color="primary" disabled>Primary button</CButton>
      <CButton color="secondary" disabled>Button</CButton>
      <CButton color="primary" variant="outline" disabled>Primary button</CButton>
      <CButton color="secondary" variant="outline" disabled>Button</CButton>
    </>
  )
}
