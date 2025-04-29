import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CCollapse } from '../index'

test('loads and displays CCollapse component', async () => {
  const { container } = render(<CCollapse>Test</CCollapse>)
  expect(container).toMatchSnapshot()
})

test('CCollapse customize', async () => {
  const { container } = render(<CCollapse className="bazinga">Test</CCollapse>)
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container).toMatchSnapshot()
})

test('CCollapse use case test', async () => {
  jest.useFakeTimers()

  const { rerender } = render(<CCollapse visible={false}>Test</CCollapse>)

  expect(screen.getByText('Test')).toHaveClass('collapse')
  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).not.toHaveClass('collapsing')

  act(() => {
    rerender(<CCollapse visible={true}>Test</CCollapse>)
  })

  expect(screen.getByText('Test')).not.toHaveClass('collapse')
  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).toHaveClass('collapsing')

  act(() => {
    jest.runAllTimers()
  })

  expect(screen.getByText('Test')).toHaveClass('collapse')
  expect(screen.getByText('Test')).toHaveClass('show')
  expect(screen.getByText('Test')).not.toHaveClass('collapsing')

  act(() => {
    rerender(<CCollapse visible={false}>Test</CCollapse>)
  })

  expect(screen.getByText('Test')).not.toHaveClass('collapse')
  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).toHaveClass('collapsing')

  act(() => {
    jest.runAllTimers()
  })

  expect(screen.getByText('Test')).toHaveClass('collapse')
  expect(screen.getByText('Test')).not.toHaveClass('show')
  expect(screen.getByText('Test')).not.toHaveClass('collapsing')

  jest.useRealTimers()
})
