import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import CFooter from 'src/CFooter'

configure({ adapter: new Adapter() });

describe('CFooter', () => {
  it('renders footer with class="c-footer"', () => {
    expect(render(<CFooter />))
    .toContain('<footer class="c-footer"></footer>')
  });
  it('calls componentDidMount', () => {
    spy(CFooter.prototype, 'componentDidMount');

    const wrapper = mount(<CFooter fixed display="lg" />);
    expect(CFooter.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should call isFixed()', () => {
    const isFixed = spy(CFooter.prototype, 'isFixed');
    shallow(<CFooter />);
    expect(isFixed.called).toBe(true);
  });

})
