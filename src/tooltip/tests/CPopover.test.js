import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CPopover from '../CPopover'

configure({ adapter: new Adapter() })

describe('CPopover', () => {
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CPopover
        header='header'
        content='content'
      >
        <a href="#"> Popover example </a>
      </CPopover>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})