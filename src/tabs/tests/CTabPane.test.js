import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'

import CTabPane from '../CTabPane'

configure({ adapter: new Adapter() })

describe('CTabPane', () => {
  it('renders customized wrapper correctly', () => {
    const wrapper = mount(
      <CTabPane className="class-name" active>
        CTabPane
      </CTabPane>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
