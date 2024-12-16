import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownSingleButtonExample = () => {
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
