import * as React from 'react'
import { render /* ,screen */, fireEvent /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CModal } from '../../../index'

test('loads and displays CModal component', async () => {
  const { container } = render(<CModal>Test</CModal>)
  expect(container).toMatchSnapshot()
})

test('CModal customize', async () => {
  const { container } = render(
    <CModal
      alignment="center"
      className="bazinga"
      duration={100}
      fullscreen="xl"
      scrollable={true}
      size="xl"
      visible={true}
    >
      Test
    </CModal>,
  )
  expect(container).toMatchSnapshot()
})

test('CModal dialog close on press ESC', async () => {
  jest.useFakeTimers()
  const onDismiss = jest.fn()
  render(
    <CModal onDismiss={onDismiss} visible>
      Test
    </CModal>,
  )
  expect(onDismiss).toHaveBeenCalledTimes(0)
  const modal = document.querySelector('.modal')
  if (modal !== null) {
    fireEvent.keyDown(modal, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    })
  }
  jest.runAllTimers()
  expect(onDismiss).toHaveBeenCalledTimes(1)
  jest.useRealTimers()
})

test('CModal dialog close on backdrop', async () => {
  jest.useFakeTimers()
  const onDismiss = jest.fn()
  render(
    <CModal onDismiss={onDismiss} visible={true}>
      Test
    </CModal>,
  )
  expect(onDismiss).toHaveBeenCalledTimes(0)
  const backdrop = document.querySelector('.modal-backdrop')
  if (backdrop !== null) {
    fireEvent.click(backdrop)
  }
  jest.runAllTimers()
  expect(onDismiss).toHaveBeenCalledTimes(1)
  jest.useRealTimers()
})
