import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CModalFooter from '../CModalFooter'

configure({ adapter: new Adapter() })

describe('CModalFooter', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CModalFooter/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CModalFooter
        className='class-name'
      >
        CAlert
      </CModalFooter>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
