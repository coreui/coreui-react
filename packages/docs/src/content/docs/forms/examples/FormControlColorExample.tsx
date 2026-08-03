import { CFormInput, CFormLabel } from '@coreui/react'

export const FormControlColorExample = () => (
  <>
    <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
    <CFormInput
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      title="Choose your color"
    />
  </>
)
