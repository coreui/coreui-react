import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupSizingExample = () => {
  return (
    <>
      <CInputGroup size="sm" className="mb-3">
        <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
        <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
        <CFormInput
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </CInputGroup>

      <CInputGroup size="lg">
        <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
        <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </CInputGroup>
    </>
  )
}
