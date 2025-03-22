import React from 'react'
import { CFormInput } from '@coreui/react'
import { IMaskMixin } from 'react-imask'

export const InputMaskCreditCardExample = () => {
  const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
    <CFormInput {...props} ref={inputRef} />
  ))
  return <CFormInputWithMask mask="0000 0000 0000 0000" />
}
