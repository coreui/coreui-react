import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavItem from '../CNavItem'

configure({ adapter: new Adapter() })

describe('CNavItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavItem
        className='class-name'
      >
        CNavItem
      </CNavItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
