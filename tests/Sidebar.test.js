import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import CSidebar from 'src/CSidebar'

configure({ adapter: new Adapter() });

describe('CSidebar', () => {
  it('renders sidebar with class="c-sidebar"', () => {
    expect(render(<CSidebar fixed display="lg" />))
    .toContain('<div class="c-sidebar"></div>')
  });
  it('calls componentDidMount', () => {
    spy(CSidebar.prototype, 'componentDidMount');

    const wrapper = mount(<CSidebar fixed display="lg" compact minimized offCanvas />);
    expect(CSidebar.prototype.componentDidMount.calledOnce).toBe(true);
  });
  it('should call isFixed()', () => {
    const isFixed = spy(CSidebar.prototype, 'isFixed');
    shallow(<CSidebar />);
    expect(isFixed.called).toBe(true);
  });
})
