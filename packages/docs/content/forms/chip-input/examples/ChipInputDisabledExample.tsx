import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputDisabledExample = () => {
  return (
    <CChipInput
      defaultValue={['Read only', 'Locked']}
      disabled
      removable={false}
      placeholder="Input disabled"
    />
  )
}
