import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarHeader from '../CSidebarHeader'

configure({ adapter: new Adapter() })

describe('CSidebarHeader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarHeader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarHeader
        className='class-name'
      >
        CSidebarHeader
      </CSidebarHeader>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
