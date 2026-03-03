import React from 'react'
import { CChipInput } from '@coreui/react'

const variants: Record<string, string> = {
  feature: 'chip-primary',
  approved: 'chip-success',
  'needs review': 'chip-warning',
  blocking: 'chip-danger',
}

export const ChipInputVariantsExample = () => {
  return (
    <CChipInput
      defaultValue={['Feature', 'Approved', 'Needs review', 'Blocking']}
      chipClassName={(value) => variants[value.trim().toLowerCase()] || ''}
      name="issues"
      placeholder="Add label..."
    />
  )
}
