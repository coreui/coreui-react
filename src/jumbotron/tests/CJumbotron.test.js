import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CJumbotron from '../CJumbotron'

configure({ adapter: new Adapter() })

describe('CJumbotron', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CJumbotron/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CJumbotron
        className='class-name'
        fluid
      >
        CJumbotron
      </CJumbotron>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
