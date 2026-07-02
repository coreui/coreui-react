import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CAlertLink } from '../index'

describe('CAlertLink', () => {
  it('should render an alert link', () => {
    const { container } = render(<CAlertLink>Test</CAlertLink>)
    expect(container.firstChild).toHaveClass('alert-link')
    expect(container.firstChild?.nodeName).toBe('A')
  })

  it('should render its content', () => {
    const { getByText } = render(<CAlertLink>Hello World!</CAlertLink>)
    expect(getByText('Hello World!')).toBeInTheDocument()
  })

  it('should apply a custom class name', () => {
    const { container } = render(<CAlertLink className="bazinga">Test</CAlertLink>)
    expect(container.firstChild).toHaveClass('bazinga')
  })
})
