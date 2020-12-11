import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarouselItem from '../CCarouselItem'

configure({ adapter: new Adapter() })

describe('CCarouselItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarouselItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  /*
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarouselItem
        className='class-name'
      >
        CCarouselItem
      </CCarouselItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  */
})
