import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSpinner from '../CSpinner'

configure({ adapter: new Adapter() })

describe('CSpinner', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSpinner/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSpinner
        className='class-name'
        grow
        size='lg'
        color='info'
      >
        CSpinner
      </CSpinner>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
