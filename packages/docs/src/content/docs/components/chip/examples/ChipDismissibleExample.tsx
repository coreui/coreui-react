import React, { useState } from 'react'
import { CChip } from '@coreui/react'

export const ChipDismissibleExample = () => {
  const [chips, setChips] = useState(['React', 'TypeScript', 'CoreUI'])

  return (
    <div className="d-flex flex-wrap gap-2">
      {chips.map((chip) => (
        <CChip
          key={chip}
          color="primary"
          removable
          ariaRemoveLabel={`Remove ${chip}`}
          onRemove={() => setChips((prev) => prev.filter((item) => item !== chip))}
        >
          {chip}
        </CChip>
      ))}
    </div>
  )
}
