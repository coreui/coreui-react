import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadioToggleButtonsExample = () => (
  <>
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option1"
      autoComplete="off"
      label="Checked"
      defaultChecked
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option2"
      autoComplete="off"
      label="Radio"
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option3"
      autoComplete="off"
      label="Radio"
      disabled
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option4"
      autoComplete="off"
      label="Radio"
    />
  </>
)
