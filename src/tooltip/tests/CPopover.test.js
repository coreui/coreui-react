import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import CPopover from '../CPopover'
import CTooltip from '../CTooltip'

configure({ adapter: new Adapter() })

const getWrapper = () => mount(
  <CPopover
    header="header"
    content="content"
  >
    <a href="#">Popover example</a>
  </CPopover>,
  { attachTo: document.getElementById('container') }
)

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

describe('CPopover', () => {
  it('Popover is built on tooltip', () => {
    const wrapper = getWrapper()
    expect(wrapper.find(CTooltip)).toBeTruthy()
  })
})
