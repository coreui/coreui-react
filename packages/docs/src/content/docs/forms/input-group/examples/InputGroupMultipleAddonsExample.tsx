import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupMultipleAddonsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText>$</CInputGroupText>
        <CInputGroupText>0.00</CInputGroupText>
        <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
      </CInputGroup>

      <CInputGroup>
        <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
        <CInputGroupText>$</CInputGroupText>
        <CInputGroupText>0.00</CInputGroupText>
      </CInputGroup>
    </>
  )
}
