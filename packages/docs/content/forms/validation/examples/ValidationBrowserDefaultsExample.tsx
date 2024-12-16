import React from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationBrowserDefaultsExample = () => {
  return (
    <CForm className="row g-3">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault01"
          label="First name"
          defaultValue="Mark"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault02"
          label="Last name"
          defaultValue="Otto"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup>
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput type="text" id="validationDefault03" label="City" required />
      </CCol>
      <CCol md={3}>
        <CFormSelect id="validationDefault04" label="State">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput type="text" id="validationDefault05" label="Zip" required />
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
