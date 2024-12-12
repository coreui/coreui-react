import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic example">
      <CButton color="primary">Left</CButton>
      <CButton color="primary">Middle</CButton>
      <CButton color="primary">Right</CButton>
    </CButtonGroup>
  )
}
