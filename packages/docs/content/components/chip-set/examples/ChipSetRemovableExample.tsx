import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetRemovableExample = () => {
  return (
    <CChipSet
      removable
      defaultChips={[
        { value: 'filter-one', label: 'Filter one' },
        { value: 'filter-two', label: 'Filter two' },
        { value: 'filter-three', label: 'Filter three', disabled: true },
      ]}
    />
  )
}
