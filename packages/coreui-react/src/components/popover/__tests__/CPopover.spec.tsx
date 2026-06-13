import * as React from 'react'
import { act, cleanup, render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CButton } from '../../button'
import { CPopover } from '../index'

let container: HTMLDivElement | null = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  cleanup()
})

test('CPopover stays visible when re-hovered during the hide delay', async () => {
  jest.useFakeTimers()

  render(
    <CPopover trigger="hover" delay={{ show: 0, hide: 300 }} content="content">
      <CButton color="primary">Test</CButton>
    </CPopover>
  )

  const btn = screen.getByRole('button', { name: /test/i })

  act(() => {
    fireEvent.mouseOver(btn)
  })

  act(() => {
    jest.runAllTimers()
  })

  expect(document.querySelector('.popover')).toHaveClass('show')

  act(() => {
    fireEvent.mouseOut(btn)
    jest.advanceTimersByTime(100)
  })

  act(() => {
    fireEvent.mouseOver(btn)
    jest.advanceTimersByTime(1000)
  })

  expect(document.querySelector('.popover')).toHaveClass('show')

  jest.useRealTimers()
})

test('CPopover preserves event handlers of the child element', async () => {
  jest.useFakeTimers()

  const onClick = jest.fn()
  const onMouseEnter = jest.fn()

  render(
    <CPopover trigger={['hover', 'click']} content="content">
      <CButton color="primary" onClick={onClick} onMouseEnter={onMouseEnter}>
        Test
      </CButton>
    </CPopover>
  )

  const btn = screen.getByRole('button', { name: /test/i })

  act(() => {
    fireEvent.mouseOver(btn)
    jest.runAllTimers()
  })

  act(() => {
    fireEvent.click(btn)
    jest.runAllTimers()
  })

  expect(onMouseEnter).toHaveBeenCalledTimes(1)
  expect(onClick).toHaveBeenCalledTimes(1)

  jest.useRealTimers()
})

test('loads and displays CPopover component', async () => {
  const { container } = render(
    <CPopover content="A">
      <CButton color="primary">Test</CButton>
    </CPopover>
  )
  expect(container).toMatchSnapshot()
})

test('CPopover customize', async () => {
  jest.useFakeTimers()

  render(
    <CPopover content="content" title="title" trigger="click" placement="right">
      <CButton color="primary">Test</CButton>
    </CPopover>,
    { container: container! }
  )

  const btn = screen.getByRole('button', { name: /test/i })

  act(() => {
    fireEvent.click(btn)
    jest.runAllTimers()
  })

  expect(document.querySelector('.popover')).toBeInTheDocument()
  expect(document.querySelector('.bs-popover-auto')).toBeInTheDocument()
  expect(document.querySelector('.popover-arrow')).toBeInTheDocument()
  expect(document.querySelector('.popover-header')).toBeInTheDocument()
  expect(document.querySelector('.popover-body')).toBeInTheDocument()

  expect(document.querySelector('.popover-header')?.innerHTML).toBe('title')
  expect(document.querySelector('.popover-body')?.innerHTML).toBe('content')

  jest.useRealTimers()
})

test('CPopover onShow and onHide', async () => {
  jest.useFakeTimers()

  const onShow = jest.fn()
  const onHide = jest.fn()

  render(
    <CPopover
      content="content"
      title="title"
      trigger="click"
      placement="right"
      onShow={onShow}
      onHide={onHide}
    >
      <CButton color="primary">Test</CButton>
    </CPopover>,
    { container: container! }
  )

  const btn = screen.getByRole('button', { name: /test/i })

  expect(onShow).toHaveBeenCalledTimes(0)
  expect(onHide).toHaveBeenCalledTimes(0)

  act(() => {
    fireEvent.click(btn)
  })

  act(() => {
    jest.runAllTimers()
  })

  expect(onShow).toHaveBeenCalledTimes(1)
  expect(onHide).toHaveBeenCalledTimes(0)

  act(() => {
    fireEvent.click(btn)
  })

  act(() => {
    jest.runAllTimers()
  })

  expect(onShow).toHaveBeenCalledTimes(1)
  expect(onHide).toHaveBeenCalledTimes(1)

  jest.useRealTimers()
})
