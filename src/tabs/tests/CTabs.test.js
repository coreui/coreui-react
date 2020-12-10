import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'

import CTabs from '../CTabs'

import CTabPane from '../CTabPane'
import CNav from '../../nav/CNav'
import CNavItem from '../../nav/CNavItem'
import CNavLink from '../../nav/CNavLink'
import CTabContent from '../CTabContent'

configure({ adapter: new Adapter() })

describe('CTabs', () => {

  it('render full tabs', () => {
    const wrapper = mount(
      <CTabs activeTab="home">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="home">
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="profile">
              Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="messages">
              Messages
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
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
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('onActiveTabChange', () => {
    const tabChange = jest.fn()
    const component = mount(
      <CTabs 
        activeTab="home"
        onActiveTabChange={tabChange}
      >
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="home">
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="profile">
              Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="messages">
              Messages
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
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
    )
    component.find('.nav-link').at(1).simulate('click')
    expect(tabChange).toHaveBeenCalledTimes(1);
  })
})
