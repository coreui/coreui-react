import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSplitButtonExample = () => {
  return (
    <>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
        <CDropdown variant="btn-group" key={index}>
          <CButton color={color}>{color}</CButton>
          <CDropdownToggle color={color} split />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      ))}
    </>
  )
}
