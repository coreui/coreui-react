import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CButtonGroup from '../CButtonGroup'
import CButton from '../CButton'

configure({ adapter: new Adapter() })

describe('CButtonGroup', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CButtonGroup/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CButtonGroup
        className='class-name'
      >
        <CButton>A</CButton>
        <CButton>B</CButton>
      </CButtonGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CButtonGroup
        className='class-name'
        size='lg'
        vertical
      >
        <CButton>A</CButton>
        <CButton>B</CButton>
      </CButtonGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
