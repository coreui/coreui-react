import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarNav from '../CSidebarNav'

configure({ adapter: new Adapter() })

describe('CSidebarNav', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarNav/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarNav
        className='class-name'
      >
        CSidebarNav
      </CSidebarNav>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
