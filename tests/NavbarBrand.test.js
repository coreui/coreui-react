import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppNavbarBrand from 'src/NavbarBrand'

describe('AppNavbarBrand', () => {
  it('renders anchor with class="navbar-brand"', () => {
    expect(render(<AppNavbarBrand />))
    .toContain('<a class="navbar-brand"></a>')
  })
})