import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppAsideToggler from 'src/AsideToggler'

describe('AppAsideToggler', () => {
  it('renders button with class="navbar-toggler"', () => {
    expect(render(<AppAsideToggler />))
    .toContain('<button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>')
  })
})