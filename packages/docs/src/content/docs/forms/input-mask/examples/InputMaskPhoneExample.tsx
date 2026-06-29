import React from 'react'
import { CFormInput } from '@coreui/react'
import { IMaskMixin } from 'react-imask'

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
))

export const InputMaskPhoneExample = () => {
  return <CFormInputWithMask mask="+{1}(000)000-00-00" />
}
