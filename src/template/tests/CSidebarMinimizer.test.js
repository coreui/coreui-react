import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarMinimizer from '../CSidebarMinimizer'

configure({ adapter: new Adapter() })

describe('CSidebarMinimizer', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarMinimizer/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarMinimizer
        className='class-name'
      >
        CSidebarMinimizer
      </CSidebarMinimizer>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
