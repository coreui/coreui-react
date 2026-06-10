import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetSingleExample = () => {
  return (
    <CChipSet
      selectable
      selectionMode="single"
      chips={['Small', 'Medium', 'Large']}
      defaultSelected={['Small']}
    />
  )
}
