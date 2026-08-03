import { CFormInput } from '@coreui/react'

export const FormControlDisabledExample = () => (
  <>
    <CFormInput
      type="text"
      placeholder="Disabled input"
      aria-label="Disabled input example"
      disabled
    />
    <CFormInput
      type="text"
      placeholder="Disabled readonly input"
      aria-label="Disabled input example"
      disabled
      readOnly
    />
  </>
)
