import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CTabContent from '../CTabContent'

configure({ adapter: new Adapter() })

describe('CTabContent', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CTabContent/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CTabContent
        className='class-name'
      >
        CTabContent
      </CTabContent>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})