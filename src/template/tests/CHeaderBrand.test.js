import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CHeaderBrand from '../CHeaderBrand'

configure({ adapter: new Adapter() })

describe('CHeaderBrand', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CHeaderBrand/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CHeaderBrand
        className='class-name'
      >
        CHeaderBrand
      </CHeaderBrand>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})