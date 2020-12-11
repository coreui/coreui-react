import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNav from '../CNav'

configure({ adapter: new Adapter() })

describe('CNav', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNav/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNav
        className='class-name'
        variant='pills'
        vertical
        justified
        fill
        inCard
      >
        CNav
      </CNav>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
