import * as React from 'react'
import { render /* ,screen */, fireEvent /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CAlert } from '../../../index'

test('loads and displays CAlert component', async () => {
  const { container } = render(<CAlert color="primary">Test</CAlert>)
  expect(container).toMatchSnapshot()
})

test('CAlert customize', async () => {
  const { container } = render(
    <CAlert color="secondary" className="bazinga" dismissible={true} variant="solid" visible={true}>
      Test
    </CAlert>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('bg-secondary')
  expect(container.firstChild).toHaveClass('text-white')
  expect(container.firstChild).toHaveClass('alert-dismissible')
})

test('CAlert click close button', async () => {
  jest.useFakeTimers()
  const onDismiss = jest.fn()
  const onDismissed = jest.fn()
  render(
    <CAlert color="primary" dismissible onDismiss={onDismiss} onDismissed={onDismissed}>
      Test
    </CAlert>,
  )
  expect(onDismiss).toHaveBeenCalledTimes(0)
  expect(onDismissed).toHaveBeenCalledTimes(0)
  const btn = document.querySelector('.btn-close')
  if (btn !== null) {
    fireEvent.click(btn)
  }
  expect(onDismiss).toHaveBeenCalledTimes(1)
  expect(onDismissed).toHaveBeenCalledTimes(0)
  jest.runAllTimers()
  expect(onDismiss).toHaveBeenCalledTimes(1)
  expect(onDismissed).toHaveBeenCalledTimes(1)
  jest.useRealTimers()
})
