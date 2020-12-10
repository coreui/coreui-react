import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CHeaderNavLink from '../CHeaderNavLink'

configure({ adapter: new Adapter() })

describe('CHeaderNavLink', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CHeaderNavLink/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CHeaderNavLink
        className='class-name'
      >
        CHeaderNavLink
      </CHeaderNavLink>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
