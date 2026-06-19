import React from 'react'
import { CFormInput } from '@coreui/react'
import { IMaskMixin } from 'react-imask'

export const InputMaskExample = () => {
  const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
    <CFormInput {...props} ref={inputRef} />
  ))

  return (
    <CFormInputWithMask
      mask={Date}
      min={new Date(1990, 0, 1)}
      max={new Date(2020, 0, 1)}
      lazy={false}
    />
  )
}
