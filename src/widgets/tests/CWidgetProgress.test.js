import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetProgress from '../CWidgetProgress'

configure({ adapter: new Adapter() })

describe('CWidgetProgress', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetProgress/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetProgress
        className='class-name'
        header='header'
        text='text'
        footer='footer'
        color='info'
        value={45}
        inverse
      >
        CWidgetProgress
      </CWidgetProgress>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
