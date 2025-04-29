import * as React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CLink } from '../../link'
import { CTooltip } from '../index'
import { CButton } from '../../button'

let container: HTMLDivElement | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  container && container.remove()
  container = null
})

test('loads and displays CTooltip component', async () => {
  const { container } = render(
    <CTooltip content="content">
      <CLink>Test</CLink>
    </CTooltip>
  )
  expect(container).toMatchSnapshot()
})

test('CTooltip customize', async () => {
  jest.useFakeTimers()

  render(
    <CTooltip trigger="hover" placement="right" content="content">
      <CLink href="#">Test</CLink>
    </CTooltip>
  )

  const link = screen.getByText('Test')

  act(() => {
    fireEvent.mouseOver(link)
    jest.runAllTimers()
  })

  expect(document.querySelector('.tooltip')).toBeInTheDocument()

  jest.useRealTimers()
})

test('CTooltip onShow and onHide', async () => {
  jest.useFakeTimers()

  const onShow = jest.fn()
  const onHide = jest.fn()

  render(
    <CTooltip trigger="click" placement="right" content="content" onShow={onShow} onHide={onHide}>
      <CButton>Test</CButton>
    </CTooltip>
  )

  const btn = screen.getByRole('button', { name: /test/i })

  expect(onShow).toHaveBeenCalledTimes(0)
  expect(onHide).toHaveBeenCalledTimes(0)

  act(() => {
    fireEvent.click(btn)
    jest.runAllTimers()
  })

  expect(onShow).toHaveBeenCalledTimes(1)
  expect(onHide).toHaveBeenCalledTimes(0)

  act(() => {
    fireEvent.click(btn)
    jest.runAllTimers()
  })

  expect(onShow).toHaveBeenCalledTimes(1)
  expect(onHide).toHaveBeenCalledTimes(1)

  jest.useRealTimers()
})
