import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import AppSidebarForm from 'src/SidebarForm'

describe('AppSidebarForm', () => {
  it('renders div with class="sidebar-form"', () => {
    expect(render(<AppSidebarForm>test</AppSidebarForm>))
    .toContain('<div class="sidebar-form">test</div>')
  })
})