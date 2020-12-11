import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CBadge from '../CBadge'

configure({ adapter: new Adapter() })

describe('CBadge', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CBadge/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CBadge
        className='class-name'
        color='warning'
        shape="pill"
        href='href'
      >
        CBadge
      </CBadge>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
