import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownOptionsExample = () => {
  return (
    <div className="d-flex gap-1">
      <CDropdown offset={[10, 20]}>
        <CDropdownToggle color="secondary">Offset</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown portal variant="input-group">
        <CDropdownToggle color="secondary" aria-controls="dropdownMenuInPortal">
          Portal
        </CDropdownToggle>
        <CDropdownMenu id="dropdownMenuInPortal">
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}
