import React from 'react'
import { CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItemsActiveExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Regular link</CDropdownItem>
      <CDropdownItem href="#" active>
        Active link
      </CDropdownItem>
      <CDropdownItem href="#">Another link</CDropdownItem>
    </CDropdownMenu>
  )
}
