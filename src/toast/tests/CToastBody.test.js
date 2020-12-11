import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CToastBody from '../CToastBody'

configure({ adapter: new Adapter() })

describe('CToastBody', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CToastBody/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CToastBody
        className='class-name'
      >
        CToastBody
      </CToastBody>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
