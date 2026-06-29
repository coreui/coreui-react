import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputSizesExample = () => {
  return (
    <>
      <div className="mb-3">
        <CChipInput
          id="skillsInputSm"
          label="Small"
          size="sm"
          defaultValue={['HTML']}
          placeholder="Add small tag..."
        />
      </div>

      <div className="mb-3">
        <CChipInput
          id="skillsInputMd"
          label="Default"
          defaultValue={['JavaScript']}
          placeholder="Add default tag..."
        />
      </div>

      <div>
        <CChipInput
          id="skillsInputLg"
          label="Large"
          size="lg"
          defaultValue={['TypeScript']}
          placeholder="Add large tag..."
        />
      </div>
    </>
  )
}
