import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCallout from '../CCallout'

configure({ adapter: new Adapter() })

describe('CCallout', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCallout/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCallout
        className='class-name'
        color='warning'
      >
        CCallout
      </CCallout>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
