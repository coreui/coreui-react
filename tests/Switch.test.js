import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, mock } from 'sinon'

import CSwitch from 'src/CSwitch'

configure({ adapter: new Adapter() });

describe('CSwitch', () => {
  it('renders label with class="c-switch"', () => {
    expect(render(<CSwitch />))
    .toContain('<label class="c-switch')
  });
  it('should render with c-switch class', () => {
    const wrapper = shallow(<CSwitch />);
    expect(wrapper.hasClass('c-switch')).toBe(true);
  });
  it('should render with outline class', () => {
    const wrapper = shallow(<CSwitch outline />);
    expect(wrapper.hasClass('c-switch-outline-secondary')).toBe(true);
  });
  it('should render with outline alt class', () => {
    const wrapper = shallow(<CSwitch outline={'alt'} />);
    expect(wrapper.hasClass('c-switch-outline-secondary-alt')).toBe(true);
  });
  it('should render with outline alt class', () => {
    const wrapper = shallow(<CSwitch outline color="primary-alt" />);
    expect(wrapper.hasClass('c-switch-outline-primary-alt')).toBe(true);
  });
  it('should render with info class', () => {
    const wrapper = shallow(<CSwitch color="info" />);
    expect(wrapper.hasClass('c-switch-info')).toBe(true);
  });
  it('should render with pill class', () => {
    const wrapper = shallow(<CSwitch variant="pill" />);
    expect(wrapper.hasClass('c-switch-pill')).toBe(true);
  });
  it('should render with 3d class', () => {
    const wrapper = shallow(<CSwitch variant="3d" />);
    expect(wrapper.hasClass('c-switch-3d')).toBe(true);
  });
  it('should render with lg class', () => {
    const wrapper = shallow(<CSwitch size="lg" />);
    expect(wrapper.hasClass('c-switch-lg')).toBe(true);
  });
  it('should render with label class', () => {
    const wrapper = shallow(<CSwitch label />);
    expect(wrapper.hasClass('c-switch-label')).toBe(true);
  });

  describe('onChange', () => {
      it('calls props.onChange if it exists', () => {
        const onChangeMock = mock()
        const wrapper = mount(<CSwitch onChange={onChangeMock} />);
        wrapper.find('input').hostNodes().simulate('change');
        expect(onChangeMock.called).toBe(true);
      });

      it('should call handleChange()', () => {
        const onChange = spy(CSwitch.prototype, 'handleChange');
        const event = { target: { checked: true } };
        const wrapper = shallow(<CSwitch label size="lg" />);
        expect(wrapper.find('input').props().checked).toBe(false);
        wrapper.find('input').simulate('change', event)
        expect(onChange.called).toBe(true);
        expect(wrapper.find('input').props().checked).toBe(true);
      })
    }
  )
})
