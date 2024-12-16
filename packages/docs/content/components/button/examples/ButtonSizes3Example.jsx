import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizes3Example = () => {
  const customVars = {
    '--cui-btn-padding-y': '.25rem',
    '--cui-btn-padding-x': '.5rem',
    '--cui-btn-font-size': '.75rem',
  }

  return (
    <CButton color="primary" size="sm" style={customVars}>
      Custom button
    </CButton>
  )
}
