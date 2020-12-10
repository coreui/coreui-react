import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CModalTitle from '../CModalTitle'

configure({ adapter: new Adapter() })

describe('CModalTitle', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CModalTitle/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CModalTitle
        className='class-name'
      >
        CModalTitle
      </CModalTitle>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
