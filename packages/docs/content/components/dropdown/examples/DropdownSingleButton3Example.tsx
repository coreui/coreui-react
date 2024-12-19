import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSingleButton3Example = () => {
  return (
    <>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
        <CDropdown variant="btn-group" key={index}>
          <CDropdownToggle color={color}>{color}</CDropdownToggle>
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
