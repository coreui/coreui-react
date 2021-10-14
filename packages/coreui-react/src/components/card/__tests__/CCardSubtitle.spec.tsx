import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CCardSubtitle } from '../../../index'

test('loads and displays CCardSubtitle component', async () => {
  const { container } = render(<CCardSubtitle>Test</CCardSubtitle>)
  expect(container).toMatchSnapshot()
})

test('CCardSubtitle customize', async () => {
  const { container } = render(
    <CCardSubtitle className="bazinga" component="h3">
      Test
    </CCardSubtitle>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('card-subtitle')
})
