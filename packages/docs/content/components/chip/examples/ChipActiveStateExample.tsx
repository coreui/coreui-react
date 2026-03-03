import React from 'react'
import { CChip } from '@coreui/react'

export const ChipActiveStateExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>Default</CChip>
      <CChip active>Active</CChip>
      <CChip color="primary">Primary</CChip>
      <CChip color="primary" active>
        Active
      </CChip>
      <CChip color="success">Success</CChip>
      <CChip color="success" active>
        Active
      </CChip>
    </div>
  )
}
