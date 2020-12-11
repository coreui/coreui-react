import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavbarNav from '../CNavbarNav'

configure({ adapter: new Adapter() })

describe('CNavbarNav', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavbarNav/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavbarNav
        className='class-name'
      >
        CNavbarNav
      </CNavbarNav>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
