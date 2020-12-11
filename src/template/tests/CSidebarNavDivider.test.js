import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarNavDivider from '../CSidebarNavDivider'

configure({ adapter: new Adapter() })

describe('CSidebarNavDivider', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarNavDivider/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarNavDivider
        className='class-name'
      >
        CSidebarNavDivider
      </CSidebarNavDivider>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
