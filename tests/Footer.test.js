import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppFooter from 'src/Footer'

describe('AppFooter', () => {
  it('renders footer with class="app-footer"', () => {
    expect(render(<AppFooter />))
    .toContain('<footer class="app-footer"></footer>')
  })
})