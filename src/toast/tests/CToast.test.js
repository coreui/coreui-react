import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CToast from '../CToast'
import CToaster from '../CToaster'

configure({ adapter: new Adapter() })

describe('CToast', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CToast/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CToast
        className='class-name'
        show
        autohide
        fade
      >
        CToast
      </CToast>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('autohide', () => {
    jest.useFakeTimers()
    const component = mount(
      <CToaster
        position='bottom-full'
      >
        <CToast
          className='class-name'
          show
          autohide={1000}
          fade
        >
          CToast
        </CToast>
      </CToaster>
    );
    jest.runAllTimers()
    console.log(component.html());
    expect(component.find(<CToast/>)).toHaveLength(0);
  })
  it('autohide', () => {
    jest.useFakeTimers()
    const component = mount(
      <CToaster
        position='bottom-full'
      >
        <CToast
          className='class-name'
          show
          autohide={1000}
          fade={false}
        >
          CToast
        </CToast>
      </CToaster>
    );
    jest.runAllTimers()
    console.log(component.html());
    expect(component.find(<CToast/>)).toHaveLength(0);
  })
})