import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CListGroupItem from '../CListGroupItem'

configure({ adapter: new Adapter() })

describe('CListGroupItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CListGroupItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CListGroupItem
        className='class-name'
        active
        disabled
        action
        color='warning'
        accent='accent'
      >
        CListGroupItem
      </CListGroupItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CListGroupItem
        className='class-name'
        active
        disabled
        action
        color='warning'
        accent='accent'
        href='href'
      >
        CListGroupItem
      </CListGroupItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
