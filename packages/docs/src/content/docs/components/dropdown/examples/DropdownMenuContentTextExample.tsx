import React from 'react'
import { CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentTextExample = () => {
  return (
    <CDropdownMenu className="p-4 text-body-secondary" style={{ maxWidth: '200px' }}>
      <p>Some example text that's free-flowing within the dropdown menu.</p>
      <p className="mb-0">And this is more example text.</p>
    </CDropdownMenu>
  )
}
