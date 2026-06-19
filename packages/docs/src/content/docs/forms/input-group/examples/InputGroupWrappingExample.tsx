import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupWrappingExample = () => {
  return (
    <CInputGroup className="flex-nowrap">
      <CInputGroupText id="addon-wrapping">@</CInputGroupText>
      <CFormInput placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
    </CInputGroup>
  )
}
