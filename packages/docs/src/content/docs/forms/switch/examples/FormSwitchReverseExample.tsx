import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchReverseExample = () => {
  return (
    <>
      <CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch" />
      <CFormSwitch
        reverse
        type="radio"
        id="reverseFormSwitch2"
        label="Disabled reverse switch"
        disabled
      />
    </>
  )
}
