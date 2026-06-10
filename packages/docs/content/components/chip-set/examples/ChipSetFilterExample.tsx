import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetFilterExample = () => {
  return (
    <CChipSet
      filter
      chips={['Design', 'Development', 'Marketing', 'Sales']}
      defaultSelected={['Development', 'Sales']}
    />
  )
}
