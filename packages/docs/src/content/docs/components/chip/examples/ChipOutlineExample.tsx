import React from 'react'
import { CChip } from '@coreui/react'

export const ChipOutlineExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip variant="outline">Outline chip</CChip>
      <CChip variant="outline">Outline chip 2</CChip>
      <CChip variant="outline">Outline chip 3</CChip>
      <CChip variant="outline">Outline chip 4</CChip>
    </div>
  )
}
