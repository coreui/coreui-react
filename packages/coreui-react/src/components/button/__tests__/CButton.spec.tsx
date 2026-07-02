import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CButton } from '../index'

describe('CButton', () => {
  describe('rendering', () => {
    it('should render a button with the base class', () => {
      const { container } = render(<CButton>Test</CButton>)
      expect(container.firstChild).toHaveClass('btn')
      expect(container.firstChild?.nodeName).toBe('BUTTON')
    })

    it('should render its content', () => {
      const { getByText } = render(<CButton>Hello World!</CButton>)
      expect(getByText('Hello World!')).toBeInTheDocument()
    })

    it('should apply the color class', () => {
      const { container } = render(<CButton color="primary">Test</CButton>)
      expect(container.firstChild).toHaveClass('btn-primary')
    })

    it('should apply the variant class', () => {
      const { container } = render(
        <CButton color="warning" variant="outline">
          Test
        </CButton>
      )
      expect(container.firstChild).toHaveClass('btn-outline-warning')
    })

    it('should apply the size class', () => {
      const { container } = render(<CButton size="lg">Test</CButton>)
      expect(container.firstChild).toHaveClass('btn-lg')
    })

    it('should apply the shape class', () => {
      const { container } = render(<CButton shape="rounded-pill">Test</CButton>)
      expect(container.firstChild).toHaveClass('rounded-pill')
    })

    it('should apply a custom class name', () => {
      const { container } = render(<CButton className="bazinga">Test</CButton>)
      expect(container.firstChild).toHaveClass('bazinga')
    })
  })

  describe('states', () => {
    it('should apply the active class', () => {
      const { container } = render(<CButton active>Test</CButton>)
      expect(container.firstChild).toHaveClass('active')
    })

    it('should be disabled', () => {
      const { container } = render(<CButton disabled>Test</CButton>)
      expect(container.firstChild).toBeDisabled()
    })

    it('should emit a click event', () => {
      const onClick = vi.fn()
      const { container } = render(<CButton onClick={onClick}>Test</CButton>)
      fireEvent.click(container.firstChild as HTMLElement)
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should not emit a click event when disabled', () => {
      const onClick = vi.fn()
      const { container } = render(
        <CButton disabled onClick={onClick}>
          Test
        </CButton>
      )
      fireEvent.click(container.firstChild as HTMLElement)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('element', () => {
    it('should set the button type', () => {
      const { container } = render(<CButton>Test</CButton>)
      expect(container.firstChild).toHaveAttribute('type', 'button')
    })

    it('should render as a custom element', () => {
      const { container } = render(<CButton as="span">Test</CButton>)
      expect(container.firstChild?.nodeName).toBe('SPAN')
    })

    it('should render as a link when href is set', () => {
      const { container } = render(<CButton href="/test">Test</CButton>)
      expect(container.firstChild?.nodeName).toBe('A')
      expect(container.firstChild).toHaveAttribute('href', '/test')
    })
  })
})
