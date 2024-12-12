import React from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const LayoutHorizontalFormExample = () => {
  return (
    <CForm>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="email" id="inputEmail3" />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword3" />
        </CCol>
      </CRow>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
        <CCol sm={10}>
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="option1"
            label="First radio"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="option2"
            label="Second radio"
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios3"
            value="option3"
            label="Third disabled radio"
            disabled
          />
        </CCol>
      </fieldset>
      <CRow className="mb-3">
        <div className="col-sm-10 offset-sm-2">
          <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
        </div>
      </CRow>
      <CButton color="primary" type="submit">
        Sign in
      </CButton>
    </CForm>
  )
}
