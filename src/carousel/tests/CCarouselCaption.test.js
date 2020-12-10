import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarouselCaption from '../CCarouselCaption'

configure({ adapter: new Adapter() })

describe('CCarouselCaption', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarouselCaption/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarouselCaption
        className='class-name'
      >
        CCarouselCaption
      </CCarouselCaption>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
