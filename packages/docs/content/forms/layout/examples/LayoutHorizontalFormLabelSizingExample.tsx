import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const LayoutHorizontalFormLabelSizingExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="email"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="email" id="colFormLabel" placeholder="col-form-label" />
        </CCol>
      </CRow>
      <CRow>
        <CFormLabel htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="email"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </CCol>
      </CRow>
    </>
  )
}
