import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppSidebarHeader from 'src/SidebarHeader'

describe('AppSidebarHeader', () => {
  it('renders div with class="sidebar-header"', () => {
    expect(render(<AppSidebarHeader>test</AppSidebarHeader>))
    .toContain('<div class="sidebar-header">test</div>')
  })
})