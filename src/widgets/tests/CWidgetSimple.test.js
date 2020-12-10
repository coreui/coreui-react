import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetSimple from '../CWidgetSimple'

configure({ adapter: new Adapter() })

describe('CWidgetSimple', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetSimple/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetSimple
        className='class-name'
        header='header'
        text='text'
      >
        CWidgetSimple
      </CWidgetSimple>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
