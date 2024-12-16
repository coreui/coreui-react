import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const LayoutAutoSizingExample = () => {
  return (
    <CForm className="row gy-2 gx-3 align-items-center">
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
          Name
        </CFormLabel>
        <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
      </CCol>
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput id="autoSizingInputGroup" placeholder="Username" />
        </CInputGroup>
      </CCol>
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
          Preference
        </CFormLabel>
        <CFormSelect id="autoSizingSelect">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
      <CCol xs="auto">
        <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
