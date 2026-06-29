import React from 'react'
import { CFormInput } from '@coreui/react'
import { IMaskMixin } from 'react-imask'

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
))

export const InputMaskCreditCardExample = () => {
  return <CFormInputWithMask mask="0000 0000 0000 0000" />
}
