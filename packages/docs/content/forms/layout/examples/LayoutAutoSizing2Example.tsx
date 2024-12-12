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

export const LayoutAutoSizing2Example = () => {
  return (
    <CForm className="row gx-3 gy-2 align-items-center">
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
          Name
        </CFormLabel>
        <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
      </CCol>
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
        </CInputGroup>
      </CCol>
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
          Preference
        </CFormLabel>
        <CFormSelect id="specificSizeSelect">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
      <CCol xs="auto">
        <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
