import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppFooter from 'src/Footer'

configure({ adapter: new Adapter() });

describe('AppFooter', () => {
  it('renders footer with class="app-footer"', () => {
    expect(render(<AppFooter />))
    .toContain('<footer class="app-footer"></footer>')
  });
  it('calls componentDidMount', () => {
    spy(AppFooter.prototype, 'componentDidMount');

    const wrapper = mount(<AppFooter fixed display="lg" />);
    expect(AppFooter.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should call isFixed()', () => {
    const isFixed = spy(AppFooter.prototype, 'isFixed');
    shallow(<AppFooter />);
    expect(isFixed.called).toBe(true);
  });

})
