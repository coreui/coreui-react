import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CMediaBody from '../CMediaBody'

configure({ adapter: new Adapter() })

describe('CMediaBody', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CMediaBody/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CMediaBody
        className='class-name'
      >
        CMediaBody
      </CMediaBody>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
