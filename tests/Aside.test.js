import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppAside from 'src/Aside'

describe('AppAside', () => {
  it('renders aside with class="aside-menu"', () => {
    expect(render(<AppAside />))
    .toContain('<aside class="aside-menu"></aside>')
  })
})