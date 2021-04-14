import * as React from 'react'
import { render /* ,screen */ /*,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CFormLabel } from '../../../index'

test('loads and displays CFormLabel component', async () => {
  const { container } = render(<CFormLabel>Test</CFormLabel>)
  expect(container).toMatchSnapshot()
})

test('CFormLabel customize className', async () => {
  const { container } = render(<CFormLabel className="bazinga">Test</CFormLabel>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('form-label')
})

test('CFormLabel customize className and classNameParent', async () => {
  const { container } = render(
    <CFormLabel className="bazinga" classNameParent="classNameParent">
      Test
    </CFormLabel>,
  )
  expect(container).toMatchSnapshot()
})
