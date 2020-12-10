import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CHeader from '../CHeader'

configure({ adapter: new Adapter() })

describe('CHeader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CHeader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CHeader
        className='class-name'
        fixed
        colorScheme='dark'
        withSubheader
      >
        CHeader
      </CHeader>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
