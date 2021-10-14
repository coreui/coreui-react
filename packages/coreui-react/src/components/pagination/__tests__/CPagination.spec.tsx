import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CPagination, CPaginationItem } from '../../../index'

test('loads and displays CPagination component', async () => {
  const { container } = render(<CPagination>Test</CPagination>)
  expect(container).toMatchSnapshot()
})

test('CPagination customize', async () => {
  const { container } = render(
    <CPagination className="bazinga" aria-label="ariaLabel" size="lg">
      Test
    </CPagination>,
  )
  expect(container).toMatchSnapshot()
  let element = container.firstChild
  if (element !== null) {
    element = element.firstChild
    expect(element).toHaveClass('bazinga')
    expect(element).toHaveClass('pagination')
    expect(element).toHaveClass('pagination-lg')
  } else {
    expect(true).toBe(false)
  }
})

test('CPagination example', async () => {
  const { container } = render(
    <CPagination>
      <CPaginationItem>A</CPaginationItem>
      <CPaginationItem>B</CPaginationItem>
      <CPaginationItem>C</CPaginationItem>
    </CPagination>,
  )
  expect(container).toMatchSnapshot()
})
