import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardBody from '../CCardBody'

configure({ adapter: new Adapter() })

describe('CCardBody', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardBody/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardBody
        className='class-name'
        color='warning'
        textColor="primary"
        borderColor="info"
        align='right'
      >
        CCardBody
      </CCardBody>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
