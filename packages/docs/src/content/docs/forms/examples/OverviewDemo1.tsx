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

export const OverviewDemo1 = () => (
  <>
    <CForm>
      <div className="mb-3">
        <CFormLabel htmlFor="inputPassword5">Password</CFormLabel>
        <CFormInput type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
        <CFormText id="passwordHelpBlock">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </CFormText>
      </div>
    </CForm>
  </>
)
