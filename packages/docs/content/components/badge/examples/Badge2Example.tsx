import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const Badge2Example = () => {
  return (
    <CButton color="primary">
      Notifications <CBadge color="secondary">4</CBadge>
    </CButton>
  )
}
