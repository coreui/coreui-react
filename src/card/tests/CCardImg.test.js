import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardImg from '../CCardImg'

configure({ adapter: new Adapter() })

describe('CCardImg', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardImg/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardImg
        className='class-name'
        variant='bottom'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
