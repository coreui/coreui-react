import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CInputGroup from '../CInputGroup'

configure({ adapter: new Adapter() })

describe('CInputGroup', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CInputGroup/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CInputGroup
        className='class-name'
        size='lg'
      >
        CInputGroup
      </CInputGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
