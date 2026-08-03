import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'

export const FormControlReadonlyPlainTextInlineExample = () => (
  <CForm className="row g-3">
    <CCol xs="auto">
      <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
        Email
      </CFormLabel>
      <CFormInput
        type="text"
        id="staticEmail2"
        defaultValue="email@example.com"
        readOnly
        plainText
      />
    </CCol>
    <CCol xs="auto">
      <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
        Password
      </CFormLabel>
      <CFormInput type="password" id="inputPassword2" placeholder="Password" />
    </CCol>
    <CCol xs="auto">
      <CButton color="primary" type="submit" className="mb-3">
        Confirm identity
      </CButton>
    </CCol>
  </CForm>
)
