import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CBackdrop } from '../index'

test('loads and displays CBackdrop component', async () => {
  const { container } = render(<CBackdrop>Test</CBackdrop>)
  expect(container).toMatchSnapshot()
})

test('CBackdrop customize', async () => {
  vi.useFakeTimers()
  const { container } = render(<CBackdrop visible={true}>Test</CBackdrop>)
  vi.runAllTimers()
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('modal-backdrop')
  vi.useRealTimers()
})

test('CBackdrop customize 2', async () => {
  vi.useFakeTimers()
  const { container } = render(
    <CBackdrop className="bazinga" visible={true}>
      Test
    </CBackdrop>
  )
  vi.runAllTimers()
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  vi.useRealTimers()
})
