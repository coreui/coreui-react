import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CFormGroup from '../CFormGroup'

configure({ adapter: new Adapter() })

describe('CFormGroup', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CFormGroup/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CFormGroup
        className='class-name'
        variant='custom-checkbox'
        inline
        disabled
      >
        CFormGroup
      </CFormGroup>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
