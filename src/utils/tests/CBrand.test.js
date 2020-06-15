import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CBrand from '../CBrand'

configure({ adapter: new Adapter() })

describe('CBrand', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CBrand/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CBrand
        className='class-name'
        href='href'
      >
        CBrand
      </CBrand>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})