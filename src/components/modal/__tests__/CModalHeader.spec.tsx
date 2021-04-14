import * as React from 'react'
import { render /* ,screen */, fireEvent /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CModalHeader } from '../../../index'

test('loads and displays CModalHeader component', async () => {
  const { container } = render(<CModalHeader>Test</CModalHeader>)
  expect(container).toMatchSnapshot()
})

test('CModalHeader customize', async () => {
  const { container } = render(<CModalHeader className="bazinga">Test</CModalHeader>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('modal-header')
})

test('CModalHeader click on button close', async () => {
  const onDismiss = jest.fn()
  render(
    <CModalHeader className="bazinga" onDismiss={onDismiss}>
      Test
    </CModalHeader>,
  )
  expect(onDismiss).toHaveBeenCalledTimes(0)
  const btn = document.querySelector('.btn-close')
  if (btn !== null) {
    fireEvent.click(btn)
  }
  expect(onDismiss).toHaveBeenCalledTimes(1)
})
