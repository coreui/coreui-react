import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import AppAside from 'src/Aside'

configure({ adapter: new Adapter() });

describe('AppAside', () => {
  it('renders aside with class="aside-menu"', () => {
    expect(render(<AppAside fixed offCanvas display="lg">aside</AppAside>))
    .toContain('<aside class="aside-menu">aside</aside>')
  });
  it('calls componentDidMount', () => {
    spy(AppAside.prototype, 'componentDidMount');

    const wrapper = mount(<AppAside fixed />);
    expect(AppAside.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should call isOffCanvas()', () => {
    const isOffCanvas = spy(AppAside.prototype, 'isOffCanvas');
    shallow(<AppAside offCanvas={false}/>);
    expect(isOffCanvas.called).toBe(true);
  });
})
