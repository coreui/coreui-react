import React from 'react'
import { CDropdownItem, CDropdownItemPlain, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItems2Example = () => {
  return (
    <CDropdownMenu>
      <CDropdownItemPlain>Dropdown item text</CDropdownItemPlain>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  )
}
