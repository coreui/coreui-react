import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CListGroupItemText from '../CListGroupItemText'

configure({ adapter: new Adapter() })

describe('CListGroupItemText', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CListGroupItemText/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CListGroupItemText
        className='class-name'
      >
        CListGroupItemText
      </CListGroupItemText>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
