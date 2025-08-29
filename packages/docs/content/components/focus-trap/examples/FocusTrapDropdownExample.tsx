import React, { useState } from 'react'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFocusTrap,
} from '@coreui/react'

export const FocusTrapDropdownExample = () => {
  const [activeTrap, setActiveTrap] = useState(false)

  return (
    <div>
      <CDropdown onShow={() => setActiveTrap(true)} onHide={() => setActiveTrap(false)}>
        <CDropdownToggle color="secondary">Settings Dropdown</CDropdownToggle>

        <CFocusTrap
          active={activeTrap}
          focusFirstElement={true}
          restoreFocus={true}
          onActivate={() => console.log('Dropdown focus trap activated')}
          onDeactivate={() => console.log('Dropdown focus trap deactivated')}
        >
          <CDropdownMenu>
            <CDropdownItem href="#">Profile Settings</CDropdownItem>
            <CDropdownItem href="#">Account Settings</CDropdownItem>
            <CDropdownItem href="#">Notification Settings</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Sign Out</CDropdownItem>
          </CDropdownMenu>
        </CFocusTrap>
      </CDropdown>
    </div>
  )
}
