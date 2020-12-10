import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CInputGroupText from '../CInputGroupText'

configure({ adapter: new Adapter() })

describe('CInputGroupText', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CInputGroupText/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CInputGroupText
        className='class-name'
      >
        CInputGroupText
      </CInputGroupText>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
