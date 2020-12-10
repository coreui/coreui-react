import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CForm from '../CForm'

configure({ adapter: new Adapter() })

describe('CForm', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CForm/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CForm
        className='class-name'
        inline
        wasValidated
      >
        CForm
      </CForm>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
