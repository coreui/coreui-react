import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
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