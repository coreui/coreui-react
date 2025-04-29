import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnstyledFillAndJustify2Example = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="tabs" layout="justified">
        <CTab aria-controls="home-tab-pane" itemKey={1}>Home</CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>Profile</CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>Contact</CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>Disabled</CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
