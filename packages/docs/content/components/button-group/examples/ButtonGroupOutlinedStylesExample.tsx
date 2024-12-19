import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupOutlinedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic outlined example">
      <CButton color="primary" variant="outline">Left</CButton>
      <CButton color="primary" variant="outline">Middle</CButton>
      <CButton color="primary" variant="outline">Right</CButton>
    </CButtonGroup>
  )
}
