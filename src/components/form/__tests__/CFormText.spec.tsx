import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CFormText } from '../../../index'

test('loads and displays CFormText component', async () => {
  const { container } = render(<CFormText>Test</CFormText>)
  expect(container).toMatchSnapshot()
})

test('CFormText customize', async () => {
  const { container } = render(
    <CFormText className="bazinga" component="h3">
      Test
    </CFormText>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('form-text')
})
