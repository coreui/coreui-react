import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppSidebar from 'src/Sidebar'

configure({ adapter: new Adapter() });

describe('AppSidebar', () => {
  it('renders sidebar with class="sidebar"', () => {
    expect(render(<AppSidebar fixed display="lg" />))
    .toContain('<div class="sidebar"></div>')
  });
  it('calls componentDidMount', () => {
    spy(AppSidebar.prototype, 'componentDidMount');

    const wrapper = mount(<AppSidebar fixed display="lg" />);
    expect(AppSidebar.prototype.componentDidMount.calledOnce).toEqual(true);
  });
})