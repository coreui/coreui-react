import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CNavbarText from '../CNavbarText'

configure({ adapter: new Adapter() })

describe('CNavbarText', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CNavbarText/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CNavbarText
        className='class-name'
      >
        CNavbarText
      </CNavbarText>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
