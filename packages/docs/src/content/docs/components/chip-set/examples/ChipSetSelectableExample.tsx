import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetSelectableExample = () => {
  return (
    <CChipSet
      selectable
      chips={['Design', 'Development', 'Marketing', 'Sales']}
      defaultSelected={['Development', 'Sales']}
    />
  )
}
