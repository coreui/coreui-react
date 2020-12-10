import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CProgress from '../CProgress'

configure({ adapter: new Adapter() })

describe('CProgress', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CProgress/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CProgress
        className='class-name'
        size='lg'
        color='warning'
        striped
        animated
        precision={5}
        showPercentage
        showValue
        max='100'
        value='55'
      >
        CProgress
      </CProgress>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
