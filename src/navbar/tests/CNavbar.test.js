import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavbar from '../CNavbar'

configure({ adapter: new Adapter() })

describe('CNavbar', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavbar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavbar
        className='class-name'
        expandable
        light
        color='warning'
        fixed='bottom'
        sticky
        expandable
      >
        CNavbar
      </CNavbar>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
