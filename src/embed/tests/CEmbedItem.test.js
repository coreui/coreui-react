import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CEmbedItem from '../CEmbedItem'

configure({ adapter: new Adapter() })

describe('CEmbedItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CEmbedItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CEmbedItem
        className='class-name'
      >
        CEmbedItem
      </CEmbedItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
