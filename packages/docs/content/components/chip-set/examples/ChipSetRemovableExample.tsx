import React, { useState } from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetRemovableExample = () => {
  const [chips, setChips] = useState([
    { value: 'filter-one', label: 'Filter one' },
    { value: 'filter-two', label: 'Filter two' },
    { value: 'filter-three', label: 'Filter three', disabled: true },
  ])

  return (
    <CChipSet
      removable
      chips={chips}
      onRemove={(value) => setChips((prev) => prev.filter((chip) => chip.value !== value))}
    />
  )
}
