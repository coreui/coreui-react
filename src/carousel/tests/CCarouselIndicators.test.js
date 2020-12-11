import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarouselIndicators from '../CCarouselIndicators'

configure({ adapter: new Adapter() })

describe('CCarouselIndicators', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarouselIndicators/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarouselIndicators
        className='class-name'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
