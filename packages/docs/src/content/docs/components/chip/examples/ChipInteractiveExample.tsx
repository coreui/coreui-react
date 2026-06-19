import React from 'react'
import { CChip } from '@coreui/react'

export const ChipInteractiveExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip selectable>Selectable</CChip>
      <CChip removable>Removable</CChip>
      <CChip selectable selected>
        Selected
      </CChip>
      <CChip disabled>Disabled</CChip>
    </div>
  )
}
