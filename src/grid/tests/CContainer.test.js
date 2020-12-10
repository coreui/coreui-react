import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CContainer from '../CContainer'

configure({ adapter: new Adapter() })

describe('CContainer', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CContainer/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CContainer
        className='class-name'
        fluid
      >
        CContainer
      </CContainer>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
