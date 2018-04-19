import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import SidebarFooter from 'src/SidebarFooter'

describe('SidebarFooter', () => {
  it('renders div with class="sidebar-footer"', () => {
    expect(render(<SidebarFooter>test</SidebarFooter>))
    .toContain('<div class="sidebar-footer">test</div>')
  })
  it('renders no div with class="sidebar-footer"', () => {
    expect(render(<SidebarFooter></SidebarFooter>))
    .toNotContain('<div class="sidebar-footer"></div>')
  })
})
