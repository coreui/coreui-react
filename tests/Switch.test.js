import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppSwitch from 'src/Switch'

configure({ adapter: new Adapter() });

describe('AppSwitch', () => {
  it('renders label with class="switch"', () => {
    expect(render(<AppSwitch />))
    .toContain('<label class="switch')
  });
  it('should call toggle', () => {
    const onChange = spy(AppSwitch.prototype, 'toggle');
    const event = {target: { checked: true }};
    const wrapper = mount(<AppSwitch outlineAlt label pill size="lg" />);
    expect(wrapper.find('input').props().checked).toBe(false);
    wrapper.find('input').simulate('change', event)
    expect(onChange.called).toBe(true);
    expect(wrapper.find('input').props().checked).toBe(true);

  })
})
