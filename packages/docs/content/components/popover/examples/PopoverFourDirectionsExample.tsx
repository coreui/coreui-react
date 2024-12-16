import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverFourDirectionsExample = () => {
  return (
    <>
      <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
        <CButton color="secondary">Popover on top</CButton>
      </CPopover>
      <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right">
        <CButton color="secondary">Popover on right</CButton>
      </CPopover>
      <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom">
        <CButton color="secondary">Popover on bottom</CButton>
      </CPopover>
      <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left">
        <CButton color="secondary">Popover on left</CButton>
      </CPopover>
    </>
  )
}
