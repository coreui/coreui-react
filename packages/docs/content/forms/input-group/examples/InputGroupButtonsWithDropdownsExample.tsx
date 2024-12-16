import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
} from '@coreui/react'

export const InputGroupButtonsWithDropdownsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CDropdown variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CFormInput aria-label="Text input with dropdown button" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput aria-label="Text input with dropdown button" />
        <CDropdown alignment="end" variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CInputGroup>

      <CInputGroup>
        <CDropdown variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CFormInput aria-label="Text input with 2 dropdown buttons" />
        <CDropdown alignment="end" variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CInputGroup>
    </>
  )
}
