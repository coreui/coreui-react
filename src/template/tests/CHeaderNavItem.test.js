import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CHeaderNavItem from '../CHeaderNavItem'

configure({ adapter: new Adapter() })

describe('CHeaderNavItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CHeaderNavItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CHeaderNavItem
        className='class-name'
      >
        CHeaderNavItem
      </CHeaderNavItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
