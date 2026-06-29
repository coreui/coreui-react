import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchSizingExample = () => {
  return (
    <>
      <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefaultNormal" />
      <CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg" />
      <CFormSwitch
        size="xl"
        label="Extra large switch checkbox input"
        id="formSwitchCheckDefaultXL"
      />
    </>
  )
}
