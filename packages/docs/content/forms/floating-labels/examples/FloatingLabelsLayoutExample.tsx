import React from 'react'
import { CCol, CFormInput, CFormSelect, CRow } from '@coreui/react'

export const FloatingLabelsLayoutExample = () => {
  return (
    <CRow xs={{ gutter: 2 }}>
      <CCol md>
        <CFormInput
          type="email"
          id="floatingInputGrid"
          floatingLabel="Email address"
          placeholder="name@example.com"
          defaultValue="email@example.com"
        />
      </CCol>
      <CCol md>
        <CFormSelect
          id="floatingSelectGrid"
          floatingLabel="Email address"
          aria-label="Works with selects"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
    </CRow>
  )
}
