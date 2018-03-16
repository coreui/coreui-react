import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppHeaderDropdown from 'src/HeaderDropdown'

describe('AppHeaderDropdown', () => {
  it('renders li with class="dropdown nav-item"', () => {
    expect(render(<AppHeaderDropdown />))
    .toContain('<li class="dropdown nav-item"></li>')
  })
})