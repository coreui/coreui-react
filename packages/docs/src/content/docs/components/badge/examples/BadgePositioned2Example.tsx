import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const BadgePositioned2Example = () => {
  return (
    <CButton color="primary" className="position-relative">
      Profile
      <CBadge
        className="border border-light p-2"
        color="danger"
        position="top-end"
        shape="rounded-circle"
      >
        <span className="visually-hidden">New alerts</span>
      </CBadge>
    </CButton>
  )
}
