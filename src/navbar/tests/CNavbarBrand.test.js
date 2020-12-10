import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavbarBrand from '../CNavbarBrand'

configure({ adapter: new Adapter() })

describe('CNavbarBrand', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavbarBrand/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavbarBrand
        className='class-name'
      >
        CNavbarBrand
      </CNavbarBrand>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
