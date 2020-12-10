import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CModalHeader from '../CModalHeader'

configure({ adapter: new Adapter() })

describe('CModalHeader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CModalHeader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CModalHeader
        className='class-name'
        closeButton
      >
        CModalHeader
      </CModalHeader>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
