import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CTooltip from '../CTooltip'

configure({ adapter: new Adapter() })

describe('CTooltip', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CTooltip>CTooltip</CTooltip>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CTooltip
        className='class-name'
        content='content'
        interactive
        placement='left-end'
        trigger='trigger'
      >
        CTooltip
      </CTooltip>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})