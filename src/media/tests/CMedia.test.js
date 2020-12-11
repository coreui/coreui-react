import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CMedia from '../CMedia'

configure({ adapter: new Adapter() })

describe('CMedia', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CMedia/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CMedia
        className='class-name'
      >
        CMedia
      </CMedia>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
