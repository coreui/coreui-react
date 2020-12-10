import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarNavTitle from '../CSidebarNavTitle'

configure({ adapter: new Adapter() })

describe('CSidebarNavTitle', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarNavTitle/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarNavTitle
        className='class-name'
      >
        CSidebarNavTitle
      </CSidebarNavTitle>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
