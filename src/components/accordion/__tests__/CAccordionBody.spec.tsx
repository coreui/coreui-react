import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CAccordionBody } from '../../../index'

test('loads and displays CAccordionBody component', async () => {
  const { container } = render(<CAccordionBody>Test</CAccordionBody>)
  expect(container).toMatchSnapshot()
})

test('CAccordionBody customize', async () => {
  const { container } = render(<CAccordionBody className="bazinga">Test</CAccordionBody>)
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('accordion-body')
  expect(container).toMatchSnapshot()
})
