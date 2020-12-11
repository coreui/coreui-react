import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCardFooter from '../CCardFooter'

configure({ adapter: new Adapter() })

describe('CCardFooter', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCardFooter/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCardFooter
        className='class-name'
        color='info'
        textColor='primary'
        borderColor="warning"
        align="left"
      >
        CCardFooter
      </CCardFooter>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
