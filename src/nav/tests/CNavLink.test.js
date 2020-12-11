import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavLink from '../CNavLink'

configure({ adapter: new Adapter() })

describe('CNavLink', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavLink/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavLink
        className='class-name'
      >
        CNavLink
      </CNavLink>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on click', () => {
    const clickFn = jest.fn();
    const component = mount(
      <CNavLink
        className='class-name'
        onClick={clickFn}
      >
        CNavLink
      </CNavLink>
    );
    component.find('a').simulate('click')
    expect(clickFn).toHaveBeenCalledTimes(1);
  })
})
