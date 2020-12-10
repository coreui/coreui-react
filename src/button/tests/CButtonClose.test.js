import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CButtonClose from '../CButtonClose'

configure({ adapter: new Adapter() })

describe('CButtonClose', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CButtonClose/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CButtonClose
        className='class-name'
      >
        CButtonClose
      </CButtonClose>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
