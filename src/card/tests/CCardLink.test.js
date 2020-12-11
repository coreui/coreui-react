import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardLink from '../CCardLink'

configure({ adapter: new Adapter() })

describe('CCardLink', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardLink/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardLink
        className='class-name'
      >
        CCardLink
      </CCardLink>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
