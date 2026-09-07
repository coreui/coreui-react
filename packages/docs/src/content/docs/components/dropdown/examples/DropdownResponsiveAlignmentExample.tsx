import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownResponsiveAlignmentExample = () => {
  return (
    <CDropdown alignment={{ lg: 'end' }} variant="btn-group">
      <CDropdownToggle color="secondary">
        Left-aligned but right aligned when large screen
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
