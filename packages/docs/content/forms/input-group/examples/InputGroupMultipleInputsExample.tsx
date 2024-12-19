import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupMultipleInputsExample = () => {
  return (
    <CInputGroup>
      <CInputGroupText>First and last name</CInputGroupText>
      <CFormInput aria-label="First name" />
      <CFormInput aria-label="Last name" />
    </CInputGroup>
  )
}
