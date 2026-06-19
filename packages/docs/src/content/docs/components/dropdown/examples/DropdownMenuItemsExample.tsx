import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownMenuItemsExample = () => {
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem as="button">Action</CDropdownItem>
        <CDropdownItem as="button">Another action</CDropdownItem>
        <CDropdownItem as="button">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem as="button">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
