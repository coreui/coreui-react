import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CHeaderNav from '../CHeaderNav'

configure({ adapter: new Adapter() })

describe('CHeaderNav', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CHeaderNav/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CHeaderNav
        className='class-name'
      >
        CHeaderNav
      </CHeaderNav>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
