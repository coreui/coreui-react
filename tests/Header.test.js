import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import CHeader from 'src/CHeader'

configure({ adapter: new Adapter() });

describe('CHeader', () => {
  it('renders header with class="c-header"', () => {
    expect(render(<CHeader fixed />))
    .toContain('<header class="c-header"></header>')
  });
  it('calls componentDidMount', () => {
    spy(CHeader.prototype, 'componentDidMount');

    const wrapper = mount(<CHeader fixed/>);
    expect(CHeader.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should call isFixed()', () => {
    const isFixed = spy(CHeader.prototype, 'isFixed');
    shallow(<CHeader />);
    expect(isFixed.called).toBe(true);
  });
})
