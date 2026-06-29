import { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { LinearExample } from './LinearExample'
import { BrandExample } from './BrandExample'
import { FlagsExample } from './FlagsExample'

export const TabPanesExample = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="#"
            active={activeKey === 1}
            onClick={(e) => {
              e.preventDefault()
              setActiveKey(1)
            }}
          >
            Linear
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="#"
            active={activeKey === 2}
            onClick={(e) => {
              e.preventDefault()
              setActiveKey(2)
            }}
          >
            Brand
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="#"
            active={activeKey === 3}
            onClick={(e) => {
              e.preventDefault()
              setActiveKey(3)
            }}
          >
            Flags
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="pt-4" style={{ '--cui-light': '#f0f4f7' }}>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          {activeKey === 1 && <LinearExample />}
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          {activeKey === 2 && <BrandExample />}
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
          {activeKey === 3 && <FlagsExample />}
        </CTabPane>
      </CTabContent>
    </>
  )
}
