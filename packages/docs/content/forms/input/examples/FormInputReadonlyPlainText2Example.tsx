import React from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'

export const FormInputReadonlyPlainText2Example = () => {
  return (
    <CForm className="row g-3">
      <CCol xs="auto">
        <CFormLabel htmlFor="staticEmail3" className="visually-hidden">
          Email
        </CFormLabel>
        <CFormInput
          type="text"
          id="staticEmail3"
          defaultValue="email@example.com"
          readOnly
          plainText
        />
      </CCol>
      <CCol xs="auto">
        <CFormLabel htmlFor="inputPassword3" className="visually-hidden">
          Password
        </CFormLabel>
        <CFormInput type="password" id="inputPassword3" placeholder="Password" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit" className="mb-3">
          Confirm identity
        </CButton>
      </CCol>
    </CForm>
  )
}
