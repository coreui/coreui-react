import React from 'react'
import { CDropdownHeader, CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentHeadersExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownHeader>Dropdown header</CDropdownHeader>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
    </CDropdownMenu>
  )
}
