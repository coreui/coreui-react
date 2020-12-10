import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarFooter from '../CSidebarFooter'

configure({ adapter: new Adapter() })

describe('CSidebarFooter', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarFooter/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarFooter
        className='class-name'
      >
        CSidebarFooter
      </CSidebarFooter>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
