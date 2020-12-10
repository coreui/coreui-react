import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CToaster from '../CToaster'

configure({ adapter: new Adapter() })

describe('CToaster', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CToaster/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CToaster
        className='class-name'
        position='bottom-full'
      >
        CToaster
      </CToaster>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
