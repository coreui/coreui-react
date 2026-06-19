import React from 'react'
import { CChip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilUser } from '@coreui/icons'

export const ChipIconExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>
        <span className="chip-icon">
          <CIcon icon={cilUser} />
        </span>
        Chip with icon 1
      </CChip>
      <CChip>
        <span className="chip-icon">
          <CIcon icon={cilInfo} />
        </span>
        Chip with icon 2
      </CChip>
    </div>
  )
}
