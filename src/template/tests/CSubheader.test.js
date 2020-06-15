import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CSubheader from '../CSubheader'

configure({ adapter: new Adapter() })

describe('CSubheader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSubheader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSubheader
        className='class-name'
      >
        CSubheader
      </CSubheader>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})