import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CToggler from '../CToggler'

configure({ adapter: new Adapter() })

describe('CToggler', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CToggler/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CToggler
        className='class-name'
        inHeader
        inNavbar
      >
        CToggler
      </CToggler>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
