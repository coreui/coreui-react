import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderPlacementFlex2Example = () => {
  return (
    <div className="d-flex align-items-center">
      <strong role="status">Loading...</strong>
      <CSpinner className="ms-auto" />
    </div>
  )
}
