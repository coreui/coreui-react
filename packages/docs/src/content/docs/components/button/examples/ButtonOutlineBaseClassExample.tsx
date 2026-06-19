import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonOutlineBaseClassExample = () => {
  return (
    <>
      <CButton variant="outline">Base outline button</CButton>
      <CButton variant="outline" active>Active state</CButton>
      <CButton variant="outline" disabled>Disabled state</CButton>
    </>
  )
}
