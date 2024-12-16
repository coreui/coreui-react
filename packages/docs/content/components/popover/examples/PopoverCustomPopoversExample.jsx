import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverCustomPopoversExample = () => {
  const customPopoverStyle = {
    '--cui-popover-max-width': '200px',
    '--cui-popover-border-color': 'var(--cui-primary)',
    '--cui-popover-header-bg': 'var(--cui-primary)',
    '--cui-popover-header-color': 'var(--cui-white)',
    '--cui-popover-body-padding-x': '1rem',
    '--cui-popover-body-padding-y': '.5rem',
  }

  return (
    <CPopover
      content="This popover is themed via CSS variables."
      placement="right"
      title="Custom popover"
      style={customPopoverStyle}
    >
      <CButton color="secondary">Custom popover</CButton>
    </CPopover>
  )
}
