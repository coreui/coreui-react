import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadiosExample = () => (
  <>
    <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio" />
    <CFormCheck
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      label="Checked radio"
      defaultChecked
    />
  </>
)
