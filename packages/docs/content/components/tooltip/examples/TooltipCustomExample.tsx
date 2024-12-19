import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipCustomExample = () => {
  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  } as React.CSSProperties

  return (
    <CTooltip
      content="This top tooltip is themed via CSS variables."
      placement="top"
      style={customTooltipStyle}
    >
      <CButton color="secondary">Custom tooltip</CButton>
    </CTooltip>
  )
}
