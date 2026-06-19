import React from 'react'
import { CDropdownDivider, CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentDividersExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  )
}
