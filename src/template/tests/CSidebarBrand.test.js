import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarBrand from '../CSidebarBrand'

configure({ adapter: new Adapter() })

describe('CSidebarBrand', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarBrand/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarBrand
        className='class-name'
      >
        CSidebarBrand
      </CSidebarBrand>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
