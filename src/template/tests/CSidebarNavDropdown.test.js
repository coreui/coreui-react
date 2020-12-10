import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarNavDropdown from '../CSidebarNavDropdown'
import CSidebarNav from '../CSidebarNav'

configure({ adapter: new Adapter() })

describe('CSidebarNavDropdown', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(
      <CSidebarNav>
        <CSidebarNavDropdown/>
      </CSidebarNav>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarNavDropdown
        className='class-name'
        icon='icon'
        fontIcon='font-icon'
        show
        route='route'
        name='name'
      >
        CSidebarNavDropdown
      </CSidebarNavDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const icon = {size: 100, customClasses: 'custom-classes'}
    const componentCustomized = renderer.create(
      <CSidebarNavDropdown
        className='class-name'
        icon={icon}
        fontIcon='font-icon'
        show
        route='route'
        name='name'
      >
        CSidebarNavDropdown
      </CSidebarNavDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
