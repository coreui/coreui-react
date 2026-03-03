import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputExample = () => {
  return (
    <CChipInput
      id="skillsInputBasic"
      label="Skills:"
      defaultValue={['JavaScript', 'TypeScript', 'Accessibility']}
      name="chipInputBasicExample"
      placeholder="Add a skill..."
    />
  )
}
