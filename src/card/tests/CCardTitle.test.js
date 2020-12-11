import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardTitle from '../CCardTitle'

configure({ adapter: new Adapter() })

describe('CCardTitle', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardTitle/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardTitle
        className='class-name'
      >
        CCardTitle
      </CCardTitle>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
