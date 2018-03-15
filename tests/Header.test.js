import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppHeader from 'src/Header'

describe('AppHeader', () => {
  it('renders header with class="app-header"', () => {
    expect(render(<AppHeader />))
    .toContain('<header class="app-header navbar"></header>')
  })
})