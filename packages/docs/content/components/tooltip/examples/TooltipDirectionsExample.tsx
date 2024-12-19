import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDirectionsExample = () => {
  return (
    <>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
        <CButton color="secondary">Tooltip on top</CButton>
      </CTooltip>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right">
        <CButton color="secondary">Tooltip on right</CButton>
      </CTooltip>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom">
        <CButton color="secondary">Tooltip on bottom</CButton>
      </CTooltip>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left">
        <CButton color="secondary">Tooltip on left</CButton>
      </CTooltip>
    </>
  )
}
