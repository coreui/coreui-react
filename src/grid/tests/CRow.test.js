import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CRow from '../CRow'

configure({ adapter: new Adapter() })

describe('CRow', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CRow/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CRow
        className='class-name'
        gutters
        form
        alignHorizontal='right'
        alignVertical='bottom'
      >
        CRow
      </CRow>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
