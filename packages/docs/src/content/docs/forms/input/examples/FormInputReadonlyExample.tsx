import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const FormInputReadonlyExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="staticEmail"
            defaultValue="email@example.com"
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword" />
        </CCol>
      </CRow>
    </>
  )
}
