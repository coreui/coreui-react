import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CListGroup from '../CListGroup'

configure({ adapter: new Adapter() })

describe('CListGroup', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CListGroup/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CListGroup
        className='class-name'
        horizontal='horizontal'
        flush
        accent
      >
        CListGroup
      </CListGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
