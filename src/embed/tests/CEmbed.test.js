import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CEmbed from '../CEmbed'

configure({ adapter: new Adapter() })

describe('CEmbed', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CEmbed/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CEmbed
        className='class-name'
        ratio='1by1'
      >
        CEmbed
      </CEmbed>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
