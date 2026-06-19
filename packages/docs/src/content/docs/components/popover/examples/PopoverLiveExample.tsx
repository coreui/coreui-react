import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverLiveExample = () => {
  return (
    <CPopover
      title="Popover title"
      content="And here’s some amazing content. It’s very engaging. Right?"
      placement="right"
    >
      <CButton color="danger" size="lg">
        Click to toggle popover
      </CButton>
    </CPopover>
  )
}
