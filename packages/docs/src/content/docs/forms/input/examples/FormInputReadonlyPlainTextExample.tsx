import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const FormInputReadonlyPlainTextExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="staticEmail2" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="staticEmail2"
            defaultValue="email@example.com"
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword2" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword2" />
        </CCol>
      </CRow>
    </>
  )
}
