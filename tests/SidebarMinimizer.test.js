import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppSidebarMinimizer from 'src/SidebarMinimizer'

describe('AppSidebarMinimizer', () => {
  it('renders button with class="sidebar-minimizer"', () => {
    expect(render(<AppSidebarMinimizer></AppSidebarMinimizer>))
    .toContain('<button class="sidebar-minimizer mt-auto" type="button"></button>')
  })
})