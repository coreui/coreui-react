import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppSidebarToggler from 'src/SidebarToggler';

describe('AppSidebarToggler', () => {
  it('renders button with class="navbar-toggler"', () => {
    expect(render(<AppSidebarToggler className="d-lg-none" display="md" mobile />))
    .toContain('<button type="button" class="d-lg-none navbar-toggler"><span class="navbar-toggler-icon"></span></button>')
  })
})