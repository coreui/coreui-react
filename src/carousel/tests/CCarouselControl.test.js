import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarouselControl from '../CCarouselControl'

configure({ adapter: new Adapter() })

describe('CCarouselControl', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarouselControl direction={'next'}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarouselControl
        className='class-name'
        direction='prev'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
