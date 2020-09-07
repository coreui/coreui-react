import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CTabPane from '../CTabPane'

configure({ adapter: new Adapter() })

describe('CTabPane', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CTabPane/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CTabPane
        className='class-name'
        data-tab="data-tab"
      >
        CTabPane
      </CTabPane>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })

})