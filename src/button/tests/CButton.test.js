import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CButton from '../CButton'

configure({ adapter: new Adapter() })

describe('CButton', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CButton/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CButton
        className='class-name'
        disabled
        block
        size="lg"
        pressed
        shape="pill"
        variant="ghost"
        color='warning'
      >
        CAlert
      </CButton>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CButton
        className='class-name'
        active
        block
        size="lg"
        pressed
        shape="pill"
        color='warning'
        href="href"
      >
        CButton
      </CButton>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on click', () => {
    const closeFn = jest.fn();
    const component = mount(
      <CButton
        className='class-name'
        active
        block
        size="lg"
        pressed
        shape="pill"
        color='warning'
        onClick={closeFn}
      >
        CButton
      </CButton>
    );
    component.find('button').simulate('click')
    expect(closeFn).toHaveBeenCalledTimes(1);
  })

})
