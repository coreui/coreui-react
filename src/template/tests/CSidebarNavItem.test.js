import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarNavItem from '../CSidebarNavItem'

configure({ adapter: new Adapter() })

describe('CSidebarNavItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarNavItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarNavItem
        className='class-name'
        name='name'
        icon='icon'
        fontIcon='font-icon'
        addLinkClass='link-class'
        label
      >
        CSidebarNavItem
      </CSidebarNavItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
