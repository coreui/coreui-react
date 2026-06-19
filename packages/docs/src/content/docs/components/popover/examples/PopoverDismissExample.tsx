import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverDismissExample = () => {
  return (
    <CPopover
      content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="right"
      title="Dismissible popover"
      trigger="focus"
    >
      <CButton color="danger">Dismissible popover</CButton>
    </CPopover>
  )
}
