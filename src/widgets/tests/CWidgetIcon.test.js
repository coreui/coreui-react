import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetIcon from '../CWidgetIcon'

configure({ adapter: new Adapter() })

describe('CWidgetIcon', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetIcon/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetIcon
        className='class-name'
        header='header'
        text='text'
        iconPadding
        color='info'
      >
        CWidgetIcon
      </CWidgetIcon>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
