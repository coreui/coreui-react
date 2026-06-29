import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CCol,
  CRow,
} from '@coreui/react'

export const OverviewDemo2 = () => (
  <>
    <CRow className="g-3 align-items-center">
      <CCol xs="auto">
        <CFormLabel htmlFor="inputPassword6" className="col-form-label">
          Password
        </CFormLabel>
      </CCol>
      <CCol xs="auto">
        <CFormInput type="password" id="inputPassword6" aria-describedby="passwordHelpInline" />
      </CCol>
      <CCol xs="auto">
        <CFormText as="span" id="passwordHelpInline">
          Must be 8-20 characters long.
        </CFormText>
      </CCol>
    </CRow>
  </>
)
