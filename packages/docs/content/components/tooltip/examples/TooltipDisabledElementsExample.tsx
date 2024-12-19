import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDisabledElementsExample = () => {
  return (
    <CTooltip content="Disabled tooltip" trigger={['hover', 'focus']}>
      <span className="d-inline-block" tabIndex={0}>
        <CButton color="primary" disabled>
          Disabled button
        </CButton>
      </span>
    </CTooltip>
  )
}
