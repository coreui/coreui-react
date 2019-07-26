import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, mock } from 'sinon'

import AppSwitch from 'src/Switch'

configure({ adapter: new Adapter() });

describe('AppSwitch', () => {
  it('renders label with class="switch"', () => {
    expect(render(<AppSwitch />))
    .toContain('<label class="switch')
  });
  it('should render with switch class', () => {
    const wrapper = shallow(<AppSwitch />);
    expect(wrapper.hasClass('switch')).toBe(true);
  });
  it('should render with outline class', () => {
    const wrapper = shallow(<AppSwitch outline />);
    expect(wrapper.hasClass('switch-outline-secondary')).toBe(true);
  });
  it('should render with outline alt class', () => {
    const wrapper = shallow(<AppSwitch outline={'alt'} />);
    expect(wrapper.hasClass('switch-outline-secondary-alt')).toBe(true);
  });
  it('should render with outline alt class', () => {
    const wrapper = shallow(<AppSwitch outline color="primary-alt" />);
    expect(wrapper.hasClass('switch-outline-primary-alt')).toBe(true);
  });
  it('should render with info class', () => {
    const wrapper = shallow(<AppSwitch color="info" />);
    expect(wrapper.hasClass('switch-info')).toBe(true);
  });
  it('should render with pill class', () => {
    const wrapper = shallow(<AppSwitch variant="pill" />);
    expect(wrapper.hasClass('switch-pill')).toBe(true);
  });
  it('should render with 3d class', () => {
    const wrapper = shallow(<AppSwitch variant="3d" />);
    expect(wrapper.hasClass('switch-3d')).toBe(true);
  });
  it('should render with lg class', () => {
    const wrapper = shallow(<AppSwitch size="lg" />);
    expect(wrapper.hasClass('switch-lg')).toBe(true);
  });
  it('should render with label class', () => {
    const wrapper = shallow(<AppSwitch label />);
    expect(wrapper.hasClass('switch-label')).toBe(true);
  });

  describe('onChange', () => {
      it('calls props.onChange if it exists', () => {
        const onChangeMock = mock()
        const wrapper = mount(<AppSwitch onChange={onChangeMock} />);
        wrapper.find('input').hostNodes().simulate('change');
        expect(onChangeMock.called).toBe(true);
      });

      it('should call handleChange()', () => {
        const onChange = spy(AppSwitch.prototype, 'handleChange');
        const event = { target: { checked: true } };
        const wrapper = shallow(<AppSwitch label size="lg" />);
        expect(wrapper.find('input').props().checked).toBe(false);
        wrapper.find('input').simulate('change', event)
        expect(onChange.called).toBe(true);
        expect(wrapper.find('input').props().checked).toBe(true);
      })
    }
  )
})
