import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverDisabledElementsExample = () => {
  return (
    <CPopover content="Disabled popover" placement="right" trigger={['hover', 'focus']}>
      <span className="d-inline-block" tabIndex={0}>
        <CButton color="primary" disabled>
          Disabled button
        </CButton>
      </span>
    </CPopover>
  )
}
