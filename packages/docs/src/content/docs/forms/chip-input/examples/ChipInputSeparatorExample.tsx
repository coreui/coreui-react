import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputSeparatorExample = () => {
  return (
    <CChipInput
      defaultValue={['CoreUI']}
      separator=","
      placeholder="Type values separated by comma"
    />
  )
}
