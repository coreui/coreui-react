import * as React from 'react'
import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CTabContent } from '../index'

test('loads and displays CTabContent component', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(<CTabContent>Test</CTabContent>)
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
})

test('CTabContent customize', async () => {
  let container: HTMLElement
  await act(async () => {
    const renderResult = render(<CTabContent className="bazinga">Test</CTabContent>)
    container = renderResult.container
  })
  expect(container!).toMatchSnapshot()
  expect(container!.firstChild).toHaveClass('bazinga')
  expect(container!.firstChild).toHaveClass('tab-content')
})
