import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardImgOverlay from '../CCardImgOverlay'

configure({ adapter: new Adapter() })

describe('CCardImgOverlay', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardImgOverlay/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardImgOverlay
        className='class-name'
      >
        CCardImgOverlay
      </CCardImgOverlay>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
