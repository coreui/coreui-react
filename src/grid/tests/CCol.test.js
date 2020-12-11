import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCol from '../CCol'

configure({ adapter: new Adapter() })

describe('CCol', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCol/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCol
        className='class-name'
        lg='5'
        md='4'
        sm='3'
      >
        CCol
      </CCol>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
