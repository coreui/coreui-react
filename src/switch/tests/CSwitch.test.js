import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSwitch from '../CSwitch'

configure({ adapter: new Adapter() })

describe('CSwitch', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSwitch/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSwitch
        className='class-name'
        size='lg'
        shape='square'
        variant='outline'
        color='info'
        checked
        labelOn='label-on'
        labelOff='label-off'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CSwitch
        className='class-name'
        size='lg'
        shape='square'
        color='info'
        checked
        labelOn='label-on'
        labelOff='label-off'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on checked change', () => {
    jest.useFakeTimers()
    const onChange = jest.fn();
    const component = mount(
      <div>
        <CSwitch
          className='class-name'
          size='lg'
          shape='square'
          variant='outline'
          color='info'
          onChange={onChange}
        />
      </div>
    );
    component.find('input').simulate('change')
    jest.runAllTimers()
    expect(onChange).toHaveBeenCalledTimes(1);
  })
})
