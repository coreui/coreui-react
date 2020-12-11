import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer'

import CTooltip from '../CTooltip'

configure({ adapter: new Adapter() })

beforeAll(() => {
  // Avoid `attachTo: document.body` Warning
  const div = document.createElement('div')
  div.setAttribute('id', 'container')
  document.body.appendChild(div)
})

afterAll(() => {
  const div = document.getElementById('container')
  if (div) {
    document.body.removeChild(div)
  }
})

describe('CTooltip', () => {
  it('renders basic wrapper correctly', () => {
    const wrapper = renderer.create(
      <CTooltip content="tooltip">
        <div>CTooltip</div>
      </CTooltip>,
      { attachTo: document.getElementById('container') }
    )
    expect(wrapper).toBeTruthy()
  })
  it('renders customized wrapper correctly', () => {
    const wrapper = mount(<CTooltip
        className="class-name"
        content="content"
        interactive
        placement="left-end"
        trigger="trigger"
      >
        <div>CTooltip</div>
      </CTooltip>,
      { attachTo: document.getElementById('container') }
    )
    expect(wrapper).toBeTruthy()
  })
})
