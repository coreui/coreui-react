import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CLabel from '../CLabel'

configure({ adapter: new Adapter() })

describe('CLabel', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CLabel/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CLabel
        className='class-name'
        hidden
        variant='custom-file'
        col
      >
        CLabel
      </CLabel>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
