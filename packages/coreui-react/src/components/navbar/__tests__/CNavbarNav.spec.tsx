import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CNavbarNav } from '../../../index'

test('loads and displays CNavbarNav component', async () => {
  const { container } = render(<CNavbarNav>Test</CNavbarNav>)
  expect(container).toMatchSnapshot()
})

test('CNavbarNav customize', async () => {
  const { container } = render(
    <CNavbarNav className="bazinga" component="h3">
      Test
    </CNavbarNav>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('navbar-nav')
  expect(container.firstChild).toHaveAttribute('role', 'navigation')
})
