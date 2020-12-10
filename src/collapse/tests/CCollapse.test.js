import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCollapse from '../CCollapse'

configure({ adapter: new Adapter() })

describe('CCollapse', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCollapse/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCollapse
        className='class-name'
        show
        navbar
      >
        CCollapse
      </CCollapse>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
