import React, { Suspense } from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebar from '../CSidebar'

import CSidebarMinimizer from '../CSidebarMinimizer'

/*
import CSidebarBrand from '../CSidebarBrand'
import CSidebarNav from '../CSidebarNav'
import CSidebarNavDivider from '../CSidebarNavDivider'
import CSidebarNavTitle from '../CSidebarNavTitle'
import CNavItem from '../CNavItem'
import CSidebarMinimizer from '../CSidebarMinimizer'
*/

configure({ adapter: new Adapter() })

describe('CSidebar', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebar
        fixed
        unfoldable
        overlaid
        breakpoint='lg'
        minimize
        show='responsive'
        size='lg'
        hideOnMobileClick
        aside
        colorScheme='light'
        dropdownMode='noAction'
        
      >
        CSidebar
      </CSidebar>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('minimize on sidebar-minimizer click', () => {
    const showChange = jest.fn();
    const minimizeChange = jest.fn();
    const component = mount(
      <CSidebar
        fixed
        unfoldable
        overlaid
        breakpoint='lg'
        minimize
        show='responsive'
        size='lg'
        hideOnMobileClick
        aside
        colorScheme='light'
        dropdownMode='noAction'
        onShowChange={showChange}
        onMinimizeChange={minimizeChange}
      >
        <CSidebarMinimizer className="c-d-md-down-none click-on-me"/>
      </CSidebar>
    );
    component.find('.click-on-me').at(0).simulate('click')
    expect(minimizeChange).toHaveBeenCalledTimes(1);
  })
})
