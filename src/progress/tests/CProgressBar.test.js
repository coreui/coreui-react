import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CProgressBar from '../CProgressBar'

configure({ adapter: new Adapter() })

describe('CProgressBar', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CProgressBar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CProgressBar
        className='class-name'
        color='warning'
        striped
        animated
        precision={5}
        showPercentage
        showValue
        max='100'
        value='75'
      >
        CProgressBar
      </CProgressBar>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
