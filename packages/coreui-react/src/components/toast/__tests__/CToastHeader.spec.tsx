import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CToastHeader } from '../index'

test('loads and displays CToastHeader component', async () => {
  const { container } = render(<CToastHeader>Test</CToastHeader>)
  expect(container).toMatchSnapshot()
})

test('CToastHeader sets the aria-label of the close button via ariaCloseLabel', async () => {
  render(
    <CToastHeader closeButton ariaCloseLabel="Dismiss">
      Test
    </CToastHeader>
  )
  expect(document.querySelector('.btn-close')).toHaveAttribute('aria-label', 'Dismiss')
})

test('CToastHeader customize', async () => {
  const { container } = render(<CToastHeader className="bazinga">Test</CToastHeader>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('toast-header')
})
