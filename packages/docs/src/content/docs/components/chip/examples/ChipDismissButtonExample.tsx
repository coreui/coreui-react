import React from 'react'
import { CChip } from '@coreui/react'

export const ChipDismissButtonExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip removable selectable>
        Chip 1
      </CChip>
      <CChip removable selectable>
        Chip 2
      </CChip>
      <CChip removable selectable disabled>
        Chip 3
      </CChip>
      <CChip removable selectable>
        Chip 4
      </CChip>
    </div>
  )
}
