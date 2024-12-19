import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupSizingExample = () => {
  return (
    <>
      <CButtonGroup size="lg" role="group" aria-label="Large button group">
        <CButton color="primary" variant="outline">Left</CButton>
        <CButton color="primary" variant="outline">Middle</CButton>
        <CButton color="primary" variant="outline">Right</CButton>
      </CButtonGroup>
      <br/>
      <CButtonGroup role="group" aria-label="Default button group">
        <CButton color="primary" variant="outline">Left</CButton>
        <CButton color="primary" variant="outline">Middle</CButton>
        <CButton color="primary" variant="outline">Right</CButton>
      </CButtonGroup>
      <br/>
      <CButtonGroup size="sm" role="group" aria-label="Small button group">
        <CButton color="primary" variant="outline">Left</CButton>
        <CButton color="primary" variant="outline">Middle</CButton>
        <CButton color="primary" variant="outline">Right</CButton>
      </CButtonGroup>
    </>
  )
}
