import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CLink from '../CLink'

configure({ adapter: new Adapter() })

describe('CLink', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CLink/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CLink
        className='class-name'
        active
        href='href'
        disabled
      >
        CLink
      </CLink>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on click', () => {
    const clickFn = jest.fn();
    const component = mount(
      <CLink
        className='class-name'
        href='#'
        onClick={clickFn}
      >
        CLink
      </CLink>
    );
    component.find('a').simulate('click')
    expect(clickFn).toHaveBeenCalledTimes(1);
  })
})
