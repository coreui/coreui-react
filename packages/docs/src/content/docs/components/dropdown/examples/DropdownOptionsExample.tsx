import React from 'react'
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

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
      <CDropdown portal>
        <CDropdownToggle color="secondary" aria-controls="dropdownMenuInPortal">
          Portal
        </CDropdownToggle>
        <CDropdownMenu id="dropdownMenuInPortal">
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown reference="parent">
        <CButton color="secondary">Reference</CButton>
        <CDropdownToggle color="secondary" split />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}
