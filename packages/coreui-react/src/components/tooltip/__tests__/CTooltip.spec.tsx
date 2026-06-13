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
  container?.remove()
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

test('CTooltip stays visible when re-hovered during the hide delay', async () => {
  jest.useFakeTimers()

  render(
    <CTooltip trigger="hover" delay={{ show: 0, hide: 300 }} content="content">
      <CLink>Test</CLink>
    </CTooltip>
  )

  const link = screen.getByText('Test')

  act(() => {
    fireEvent.mouseOver(link)
  })

  act(() => {
    jest.runAllTimers()
  })

  expect(document.querySelector('.tooltip')).toHaveClass('show')

  act(() => {
    fireEvent.mouseOut(link)
    jest.advanceTimersByTime(100)
  })

  act(() => {
    fireEvent.mouseOver(link)
    jest.advanceTimersByTime(1000)
  })

  expect(document.querySelector('.tooltip')).toHaveClass('show')

  jest.useRealTimers()
})

test('CTooltip cancels the pending show timer when pointer leaves before the show delay', async () => {
  jest.useFakeTimers()

  render(
    <CTooltip trigger="hover" delay={{ show: 300, hide: 0 }} content="content">
      <CLink>Test</CLink>
    </CTooltip>
  )

  const link = screen.getByText('Test')

  act(() => {
    fireEvent.mouseOver(link)
    jest.advanceTimersByTime(100)
  })

  act(() => {
    fireEvent.mouseOut(link)
    jest.advanceTimersByTime(1000)
  })

  expect(document.querySelector('.tooltip.show')).toBeNull()
  expect(link).not.toHaveAttribute('aria-describedby')

  jest.useRealTimers()
})

test('CTooltip preserves event handlers of the child element', async () => {
  jest.useFakeTimers()

  const onClick = jest.fn()
  const onMouseEnter = jest.fn()

  render(
    <CTooltip trigger={['hover', 'click']} content="content">
      <CButton onClick={onClick} onMouseEnter={onMouseEnter}>
        Test
      </CButton>
    </CTooltip>
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
