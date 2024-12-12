import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchExample = () => {
  return (
    <>
      <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
      <CFormSwitch
        label="Checked switch checkbox input"
        id="formSwitchCheckChecked"
        defaultChecked
      />
      <CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled />
      <CFormSwitch
        label="Disabled checked switch checkbox input"
        id="formSwitchCheckCheckedDisabled"
        defaultChecked
        disabled
      />
    </>
  )
}
