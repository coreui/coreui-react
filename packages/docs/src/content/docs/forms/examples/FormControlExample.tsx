import { CForm, CFormInput, CFormLabel, CFormTextarea } from '@coreui/react'

export const FormControlExample = () => (
  <CForm>
    <div className="mb-3">
      <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
      <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
      <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
    </div>
  </CForm>
)
