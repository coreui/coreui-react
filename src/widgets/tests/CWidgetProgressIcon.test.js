import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetProgressIcon from '../CWidgetProgressIcon'

configure({ adapter: new Adapter() })

describe('CWidgetProgressIcon', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetProgressIcon/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetProgressIcon
        className='class-name'
        header='header'
        text='text'
        value={55}
        color='info'
        inverse
      >
        CWidgetProgressIcon
      </CWidgetProgressIcon>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
