import React, { useState } from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputSelectableExample = () => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <>
      <CChipInput
        defaultValue={['Design', 'Backend', 'QA', 'DevOps']}
        selectable
        onSelect={setSelected}
        placeholder="Select chips"
      />
      <p className="mt-2 mb-0 small text-body-secondary">
        Selected: {selected.length ? selected.join(', ') : 'None'}
      </p>
    </>
  )
}
