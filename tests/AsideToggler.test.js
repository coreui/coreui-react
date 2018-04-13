import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';

import AppAsideToggler from 'src/AsideToggler'

configure({ adapter: new Adapter() });

describe('AppAsideToggler', () => {
  it('renders button with class="navbar-toggler"', () => {
    expect(render(<AppAsideToggler />))
    .toContain('<button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>')
  })
  it('should call asideToggle', () => {
    let component = mount(<AppAsideToggler />);
    const instance = component.instance();
    const handleClickSpy = sinon.spy(instance, 'asideToggle');
    component.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  })
  it('should call asideToggle mobile', () => {
    let component = mount(<AppAsideToggler mobile/>);
    const instance = component.instance();
    const handleClickSpy = sinon.spy(instance, 'asideToggle');
    component.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  })
})
