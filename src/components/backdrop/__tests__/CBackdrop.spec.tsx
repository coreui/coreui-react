import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CBackdrop } from '../../../index'

test('loads and displays CBackdrop component', async () => {
  const { container } = render(<CBackdrop>Test</CBackdrop>)
  expect(container).toMatchSnapshot()
})

test('CBackdrop customize', async () => {
  const { container } = render(<CBackdrop className="bazinga">Test</CBackdrop>)
  expect(container).toMatchSnapshot()
  // expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('modal-backdrop')
})
