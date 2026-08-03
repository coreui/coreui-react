import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadiosDisabledExample = () => (
  <>
    <CFormCheck
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioDisabled"
      label="Disabled radio"
      disabled
    />
    <CFormCheck
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioCheckedDisabled"
      label="Disabled checked radio"
      defaultChecked
      disabled
    />
  </>
)
