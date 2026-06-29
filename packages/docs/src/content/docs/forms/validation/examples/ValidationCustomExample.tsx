import React from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationCustomExample = () => {
  return (
    <CForm className="row g-3">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer01"
          label="Email"
          feedback="Looks good!"
          defaultValue="name@surname.com"
          valid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer02"
          label="Repeat email"
          feedback="Looks good!"
          defaultValue="name@surname.com"
          valid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationServerUsername"
            feedback="Please choose a username."
            defaultValue=""
            aria-describedby="inputGroupPrepend03"
            invalid
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          id="validationServer03"
          label="City"
          feedback="Please provide a valid city."
          invalid
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          id="validationServer04"
          label="State"
          feedback="Please provide a valid city."
          invalid
        >
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          id="validationServer05"
          label="zip"
          feedback="Please provide a valid zip."
          invalid
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          invalid
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
