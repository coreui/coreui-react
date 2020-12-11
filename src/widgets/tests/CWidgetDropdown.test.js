import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetDropdown from '../CWidgetDropdown'

configure({ adapter: new Adapter() })

describe('CWidgetDropdown', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetDropdown/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetDropdown
        className='class-name'
        header='header'
        color='info'
        text='text'
      >
        CWidgetDropdown
      </CWidgetDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
