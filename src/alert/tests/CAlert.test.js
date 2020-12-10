import React from 'react'
//import { renderHook, act } from '@testing-library/react-hooks'
import { configure, mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CAlert from '../CAlert'

configure({ adapter: new Adapter() })

describe('CAlert', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CAlert/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CAlert
        className='class-name'
        closeButton
        color='warning'
        show
      >
        CAlert
      </CAlert>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  /*
  it('closes alert after click on dismiss button', () => {
    jest.useFakeTimers()
    const onClose = jest.fn();
    const component = mount(
      <CAlert 
        closeButton 
        show
        onShowChange={onClose}
      >
        CAlert
      </CAlert>
    );
    console.log(component.html())
    component.find('button').simulate('click')
    //jest.runAllTimers()
    jest.advanceTimersByTime(5001)
    console.log(component.html())
    expect(component).toBe(false)
  })
  */
  it('run onShowChange after click on dismiss button', () => {
    jest.useFakeTimers()
    const onClose = jest.fn();
    const component = mount(
      <CAlert 
        closeButton 
        show
        onShowChange={onClose}
      >
        CAlert
      </CAlert>
    );
    expect(onClose).toHaveBeenCalledTimes(1);
    component.find('button').simulate('click')
    jest.advanceTimersByTime(1000)
    expect(onClose).toHaveBeenCalledTimes(2);
  })
})
