import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardHeader from '../CCardHeader'

configure({ adapter: new Adapter() })

describe('CCardHeader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardHeader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardHeader
        className='class-name'
        color='warning'
        textColor='info'
        borderColor='danger'
        align='left'
      >
        CCardHeader
      </CCardHeader>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
