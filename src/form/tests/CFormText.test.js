import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CFormText from '../CFormText'

configure({ adapter: new Adapter() })

describe('CFormText', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CFormText/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CFormText
        className='class-name'
        color='warning'
      >
        CFormText
      </CFormText>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
