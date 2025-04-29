import React, { useState } from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsControlledExample = () => {
  const [activeTab, setActiveTab] = useState<number | string>('profile')

  return (
    <CTabs activeItemKey={activeTab} onChange={setActiveTab}>
      <CTabList variant="tabs">
        <CTab itemKey="home">Home</CTab>
        <CTab itemKey="profile">Profile</CTab>
        <CTab itemKey="contact">Contact</CTab>
        <CTab disabled itemKey="disabled">
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" itemKey="home">
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="profile">
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="contact">
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="disabled">
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
