import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CButtonToolbar from '../CButtonToolbar'

configure({ adapter: new Adapter() })

describe('CButtonToolbar', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CButtonToolbar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CButtonToolbar
        className='class-name'
        justify='between'
      >
        CButtonToolbar
      </CButtonToolbar>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
