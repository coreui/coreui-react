import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CAccordionCollapse } from '../../../index'

test('loads and displays CAccordionCollapse component', async () => {
  const { container } = render(<CAccordionCollapse>Test</CAccordionCollapse>)
  expect(container.firstChild).toHaveClass('accordion-collapse')
  expect(container).toMatchSnapshot()
})
