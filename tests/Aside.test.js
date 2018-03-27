import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppAside from 'src/Aside'

configure({ adapter: new Adapter() });

describe('AppAside', () => {
  it('renders aside with class="aside-menu"', () => {
    expect(render(<AppAside fixed hidden display="lg">aside</AppAside>))
    .toContain('<aside class="aside-menu">aside</aside>')
  });
  it('calls componentDidMount', () => {
    spy(AppAside.prototype, 'componentDidMount');

    const wrapper = mount(<AppAside fixed hidden display="lg" />);
    expect(AppAside.prototype.componentDidMount.calledOnce).toEqual(true);
  });
})