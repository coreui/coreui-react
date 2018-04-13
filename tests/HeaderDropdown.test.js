import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppHeaderDropdown from 'src/HeaderDropdown'
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('AppHeaderDropdown', () => {
  it('renders li with class="dropdown nav-item"', () => {
    expect(render(<AppHeaderDropdown />)).toContain('<li class="dropdown nav-item"></li>')
  })
  it('dropdownOpen changed on toggle', () => {

    let component = mount(<AppHeaderDropdown />);
    const instance = component.instance();

    expect(instance.state.dropdownOpen).toBe(false);
    instance.toggle();
    expect(instance.state.dropdownOpen).toBe(true);
  })
})
