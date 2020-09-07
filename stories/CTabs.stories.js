import React from 'react';
import CTabs from '../src/tabs/CTabs'
import CTabPane from '../src/tabs/CTabPane'
import CTabContent from '../src/tabs/CTabContent'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CNav from '../src/nav/CNav'
import CNavItem from '../src/nav/CNavItem'
import CNavLink from '../src/nav/CNavLink'

import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'CTabs'
};

export const basic = () => {

  const fade = boolean('Fade', true, 'Other')
  const activeTab = select('Active tab', ['home', 'profile', 'messages'], 'home', 'Other')

  return <>
    <CCol lg="6" md="8" xs="12">
      <CCard> 
        <CCardBody>
          <CTabs activeTab={activeTab}>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="home">
                  ABC
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="profile">
                  DEF
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="messages">
                  GHI
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent
              fade={fade}
            >
              <CTabPane data-tab="home">
                123
              </CTabPane>
              <CTabPane data-tab="profile">
                456
              </CTabPane>
              <CTabPane data-tab="messages">
                789
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}