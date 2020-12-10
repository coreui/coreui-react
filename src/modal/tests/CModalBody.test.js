import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CModalBody from '../CModalBody'

configure({ adapter: new Adapter() })

describe('CModalBody', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CModalBody/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CModalBody
        className='class-name'
      >
        CModalBody
      </CModalBody>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
