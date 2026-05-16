import React, { useState } from 'react'
import { CAlert, CSearchButton } from '@coreui/react'

export const SearchButtonCustomShortcutExample = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CSearchButton
        placeholder="Command palette"
        shortcut="meta+k,ctrl+k"
        onTrigger={() => setCount((value) => value + 1)}
        aria-label="Open command palette"
      />
      <CAlert color="info" className="mt-3 mb-0">
        Triggered {count} {count === 1 ? 'time' : 'times'} with click or shortcut.
      </CAlert>
    </div>
  )
}
