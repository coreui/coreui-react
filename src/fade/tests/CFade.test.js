import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CFade from '../CFade'

configure({ adapter: new Adapter() })

describe('CFade', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CFade/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CFade
        className='class-name'
        baseClassActive='base-class-active'
        baseClass='base-class'
      >
        CFade
      </CFade>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
