import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CImg from '../CImg'

configure({ adapter: new Adapter() })

describe('CImg', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CImg/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CImg
        className='class-name'
        fluid
        block
        thumbnail
        shape='rounded'
        align='right'
        src='src'
        width='200px'
        height='250px'
        placeholderColor='#ffffff'
        fluidGrow
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
