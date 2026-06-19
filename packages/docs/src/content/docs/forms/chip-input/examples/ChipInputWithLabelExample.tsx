import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputWithLabelExample = () => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="techStackInput">
        Tech stack
      </label>
      <CChipInput
        id="techStackInput"
        name="techStack"
        defaultValue={['Vue', 'Vite']}
        placeholder="Add package..."
      />
      <div className="form-text">Press Enter or comma to add a value.</div>
    </div>
  )
}
