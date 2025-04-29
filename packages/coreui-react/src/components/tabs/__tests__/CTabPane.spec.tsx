import * as React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CTabPane, CTabContent } from '../index'

test('loads and displays CTabPane component', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(<CTabPane>Test</CTabPane>)
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
})

test('CTabPane customize', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(
      <CTabPane className="bazinga" visible={true}>
        Test
      </CTabPane>
    )
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
})

test('CTabContent use case test', async () => {
  jest.useFakeTimers()

  const { rerender } = render(
    <CTabContent>
      <CTabPane visible={false}>Test</CTabPane>
    </CTabContent>
  )

  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).not.toHaveClass('active')

  act(() => {
    rerender(
      <CTabContent>
        <CTabPane visible={true}>Test</CTabPane>
      </CTabContent>
    )
    jest.runAllTimers()
  })

  await waitFor(() => {
    expect(screen.getByText('Test')).toHaveClass('active')
    expect(screen.getByText('Test')).toHaveClass('show')
  })

  act(() => {
    rerender(
      <CTabContent>
        <CTabPane visible={false}>Test</CTabPane>
      </CTabContent>
    )
    jest.runAllTimers()
  })

  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).not.toHaveClass('active')

  jest.useRealTimers()
})
