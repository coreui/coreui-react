import React from 'react'
import { CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItemsDisabledExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Regular link</CDropdownItem>
      <CDropdownItem href="#" disabled>Disabled link</CDropdownItem>
      <CDropdownItem href="#">Another link</CDropdownItem>
    </CDropdownMenu>
  )
}
