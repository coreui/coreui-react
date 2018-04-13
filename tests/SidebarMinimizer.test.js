import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';

import AppSidebarMinimizer from 'src/SidebarMinimizer'

configure({ adapter: new Adapter() });

describe('AppSidebarMinimizer', () => {
  it('renders button with class="sidebar-minimizer"', () => {
    expect(render(<AppSidebarMinimizer></AppSidebarMinimizer>))
    .toContain('<button class="sidebar-minimizer mt-auto" type="button"></button>')
  })
  it('should call handleClick', () => {
    let component = mount(<AppSidebarMinimizer />);
    const instance = component.instance();
    const handleClickSpy = sinon.spy(instance, 'handleClick');
    component.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  })
})
