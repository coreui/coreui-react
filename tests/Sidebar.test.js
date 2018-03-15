import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppSidebar from 'src/Sidebar'

describe('AppSidebar', () => {
  it('renders sidebar with class="sidebar"', () => {
    expect(render(<AppSidebar />))
    .toContain('<div class="sidebar"></div>')
  })
})