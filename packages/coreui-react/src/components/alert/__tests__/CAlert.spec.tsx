import * as React from 'react'
import { act, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CAlert } from '../index'

test('loads and displays CAlert component', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(<CAlert color="primary">Test</CAlert>)
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
})

test('CAlert customize', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(
      <CAlert
        color="secondary"
        className="bazinga"
        dismissible={true}
        variant="solid"
        visible={true}
      >
        Test
      </CAlert>
    )
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
  expect(container!.firstChild).toHaveClass('bazinga')
  expect(container!.firstChild).toHaveClass('bg-secondary')
  expect(container!.firstChild).toHaveClass('text-white')
  expect(container!.firstChild).toHaveClass('alert-dismissible')
})

test('CAlert click close button', async () => {
  jest.useFakeTimers()

  const onClose = jest.fn()
  render(
    <CAlert color="primary" dismissible onClose={onClose}>
      Test
    </CAlert>
  )

  expect(onClose).toHaveBeenCalledTimes(0)

  const btn = document.querySelector('.btn-close')

  if (btn !== null) {
    act(() => {
      fireEvent.click(btn)
      jest.runAllTimers()
    })
  }

  expect(onClose).toHaveBeenCalledTimes(1)

  jest.useRealTimers()
})
