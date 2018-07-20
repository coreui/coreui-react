import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';

import AppSidebarToggler from 'src/SidebarToggler';

configure({ adapter: new Adapter() });

describe('AppSidebarToggler', () => {
  it('renders button with class="navbar-toggler"', () => {
    expect(render(<AppSidebarToggler className="d-lg-none" display="md" mobile />))
    .toContain('<button type="button" class="d-lg-none navbar-toggler" data-sidebar-toggler="true"><span class="navbar-toggler-icon"></span></button>')
  })
  it('should call sidebarToggle', () => {
    let component = mount(<AppSidebarToggler />);
    const instance = component.instance();
    const handleClickSpy = sinon.spy(instance, 'sidebarToggle');
    component.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  })
  it('should call sidebarToggle mobile', () => {
    let component = mount(<AppSidebarToggler mobile />);
    const instance = component.instance();
    const handleClickSpy = sinon.spy(instance, 'sidebarToggle');
    component.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  })
})
