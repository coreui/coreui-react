import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CInputGroupText } from '../../../index'

test('loads and displays CInputGroupText component', async () => {
  const { container } = render(<CInputGroupText>Test</CInputGroupText>)
  expect(container).toMatchSnapshot()
})

test('renders CInputGroupText component as a label', async () => {
  const { container } = render(
    <CInputGroupText component="label" htmlFor="input">
      Test
    </CInputGroupText>,
  )
  expect(container).toMatchSnapshot()
})

test('CInputGroupText customize', async () => {
  const { container } = render(<CInputGroupText className="bazinga">Test</CInputGroupText>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('input-group-text')
})
