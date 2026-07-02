import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CAlertHeading } from '../index'

describe('CAlertHeading', () => {
  it('should render an alert heading', () => {
    const { container } = render(<CAlertHeading>Test</CAlertHeading>)
    expect(container.firstChild).toHaveClass('alert-heading')
    expect(container.firstChild?.nodeName).toBe('H4')
  })

  it('should render its content', () => {
    const { getByText } = render(<CAlertHeading>Hello World!</CAlertHeading>)
    expect(getByText('Hello World!')).toBeInTheDocument()
  })

  it('should apply a custom class name', () => {
    const { container } = render(<CAlertHeading className="bazinga">Test</CAlertHeading>)
    expect(container.firstChild).toHaveClass('bazinga')
  })

  it('should render as a custom element', () => {
    const { container } = render(<CAlertHeading as="h2">Test</CAlertHeading>)
    expect(container.firstChild?.nodeName).toBe('H2')
  })
})
