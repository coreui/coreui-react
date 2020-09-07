import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CFooter from '../CFooter'

configure({ adapter: new Adapter() })

describe('CFooter', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CFooter/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CFooter
        className='class-name'
        fixed
      >
        CFooter
      </CFooter>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})