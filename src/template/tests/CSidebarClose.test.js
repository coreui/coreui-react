import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarClose from '../CSidebarClose'

configure({ adapter: new Adapter() })

describe('CSidebarClose', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarClose/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
