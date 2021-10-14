import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CHeaderBrand } from '../../../index'

test('loads and displays CHeaderBrand component', async () => {
  const { container } = render(<CHeaderBrand>Test</CHeaderBrand>)
  expect(container).toMatchSnapshot()
})

test('CHeaderBrand customize', async () => {
  const { container } = render(
    <CHeaderBrand className="bazinga" component="h3">
      Test
    </CHeaderBrand>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('header-brand')
})
