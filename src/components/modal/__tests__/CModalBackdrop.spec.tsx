import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CModalBackdrop } from '../../../index'

test('loads and displays CModalBackdrop component', async () => {
  const { container } = render(<CModalBackdrop>Test</CModalBackdrop>)
  expect(container).toMatchSnapshot()
})

test('CModalBackdrop customize', async () => {
  const { container } = render(<CModalBackdrop className="bazinga">Test</CModalBackdrop>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('modal-backdrop')
})
