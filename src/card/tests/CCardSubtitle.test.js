import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardSubtitle from '../CCardSubtitle'

configure({ adapter: new Adapter() })

describe('CCardSubtitle', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardSubtitle/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardSubtitle
        className='class-name'
      >
        CCardSubtitle
      </CCardSubtitle>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
