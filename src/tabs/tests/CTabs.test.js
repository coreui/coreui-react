import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CTabs from '../CTabs'

import CTabPane from '../CTabPane'
import CNav from '../CNav'
import CNavItem from '../CNavItem'
import CNavLink from '../CNavLink'
import CTabContent from '../CTabContent'

configure({ adapter: new Adapter() })

describe('CTabs', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CTabs/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CTabs
        activeTab='first-one'
        fade
      >
        CTabs
      </CTabs>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('render full tabs', () => {
    const componentCustomized = renderer.create(
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
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('onActiveTabChange', () => {
    const tabChange = jest.fn();
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
    );
    component.find('.nav-link').at(1).simulate('click')
    expect(tabChange).toHaveBeenCalledTimes(1);
  });
})