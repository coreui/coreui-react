import { CFormInput } from '@coreui/react'

export const FormControlReadonlyExample = () => (
  <CFormInput
    type="text"
    placeholder="Readonly input here..."
    aria-label="readonly input example"
    readOnly
  />
)
