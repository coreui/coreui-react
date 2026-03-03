import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputReadonlyExample = () => {
  return (
    <CChipInput
      defaultValue={['JavaScript', 'TypeScript']}
      readOnly
      placeholder="Read-only values"
    />
  )
}
