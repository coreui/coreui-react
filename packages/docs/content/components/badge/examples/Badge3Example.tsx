import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const Badge3Example = () => {
  return (
    <CButton color="primary">
      Profile <CBadge color="secondary">9</CBadge>
      <span className="visually-hidden">unread messages</span>
    </CButton>
  )
}
