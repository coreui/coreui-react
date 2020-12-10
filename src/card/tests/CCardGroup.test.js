import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardGroup from '../CCardGroup'

configure({ adapter: new Adapter() })

describe('CCardGroup', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardGroup/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardGroup
        className='class-name'
        columns
      >
        CCardGroup
      </CCardGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CCardGroup
        className='class-name'
        deck
      >
        CCardGroup
      </CCardGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
