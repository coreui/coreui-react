import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CToast, CToastBody, CToastHeader } from '../../../index'

test('loads and displays CToast component', async () => {
  const { container } = render(<CToast>Test</CToast>)
  expect(container).toMatchSnapshot()
})

test('CToast customize', async () => {
  const { container } = render(
    <CToast
      className="bazinga"
      autohide={false}
      color="warning"
      delay={100}
      key={1}
      visible={true}
      //onDismiss
    >
      Test
    </CToast>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('toast')
  expect(container.firstChild).toHaveClass('fade')
  expect(container.firstChild).toHaveClass('bg-warning')
  expect(container.firstChild).toHaveClass('show')
})

test('CToast click on dismiss button', async () => {
  jest.useFakeTimers()
  const onDismiss = jest.fn()
  const { container } = render(
    <CToast
      className="bazinga"
      autohide={false}
      color="warning"
      delay={100}
      key={1}
      visible={true}
      onDismiss={onDismiss}
    >
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>,
  )
  expect(container.firstChild).toHaveClass('show')
  expect(onDismiss).toHaveBeenCalledTimes(0)
  const btn = document.querySelector('.btn-close')
  if (btn !== null) {
    fireEvent.click(btn)
  }
  jest.runAllTimers()
  expect(onDismiss).toHaveBeenCalledTimes(1)
  expect(container.firstChild).toBeNull()
  jest.useRealTimers()
})

test('CToast test autohide', async () => {
  jest.useFakeTimers()
  const { container } = render(
    <CToast autohide={true} delay={100} visible={true}>
      Test
    </CToast>,
  )
  expect(container.firstChild).toHaveClass('show')
  jest.runAllTimers()
  expect(container.firstChild).toBeNull()
  jest.useRealTimers()
})
