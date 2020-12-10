import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CListGroupItemHeading from '../CListGroupItemHeading'

configure({ adapter: new Adapter() })

describe('CListGroupItemHeading', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CListGroupItemHeading/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CListGroupItemHeading
        className='class-name'
      >
        CListGroupItemHeading
      </CListGroupItemHeading>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
