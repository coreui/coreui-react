import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarouselInner from '../CCarouselInner'

configure({ adapter: new Adapter() })

describe('CCarouselInner', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarouselInner/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarouselInner
        className='class-name'
      />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
