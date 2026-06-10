import React, { useState } from 'react'
import { CChip, CChipSet } from '@coreui/react'

export const ChipSetRemovableExample = () => {
  const [chips, setChips] = useState([
    { value: 'filter-one', label: 'Filter one' },
    { value: 'filter-two', label: 'Filter two' },
    { value: 'filter-three', label: 'Filter three', disabled: true },
  ])

  return (
    <CChipSet
      removable
      onRemove={(value) => setChips((prev) => prev.filter((chip) => chip.value !== value))}
    >
      {chips.map((chip) => (
        <CChip key={chip.value} value={chip.value} disabled={chip.disabled}>
          {chip.label}
        </CChip>
      ))}
    </CChipSet>
  )
}
