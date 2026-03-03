import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputMaxExample = () => {
  return (
    <CChipInput
      defaultValue={['React', 'CoreUI']}
      maxChips={3}
      placeholder="Max 3 chips"
    />
  )
}
