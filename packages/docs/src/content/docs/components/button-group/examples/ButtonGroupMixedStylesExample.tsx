import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupMixedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic mixed styles example">
      <CButton color="danger">Left</CButton>
      <CButton color="warning">Middle</CButton>
      <CButton color="success">Right</CButton>
    </CButtonGroup>
  )
}
