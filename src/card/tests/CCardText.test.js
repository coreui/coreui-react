import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardText from '../CCardText'

configure({ adapter: new Adapter() })

describe('CCardText', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardText/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardText
        className='class-name'
      >
        CCardText
      </CCardText>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
