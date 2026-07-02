import * as React from 'react'
import { act, render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CAlert } from '../index'

describe('CAlert', () => {
  describe('rendering', () => {
    it('should apply the color class', () => {
      const { container } = render(<CAlert color="primary">Test</CAlert>)
      expect(container.firstChild).toHaveClass('alert', 'alert-primary')
    })

    it('should render its content', () => {
      const { getByText } = render(<CAlert color="primary">Hello World!</CAlert>)
      expect(getByText('Hello World!')).toBeInTheDocument()
    })

    it('should apply the solid variant classes', () => {
      const { container } = render(
        <CAlert color="secondary" variant="solid">
          Test
        </CAlert>
      )
      expect(container.firstChild).toHaveClass('bg-secondary', 'text-white')
    })

    it('should apply a custom class name', () => {
      const { container } = render(
        <CAlert color="primary" className="bazinga">
          Test
        </CAlert>
      )
      expect(container.firstChild).toHaveClass('bazinga')
    })
  })

  describe('close', () => {
    it('should render a close button', () => {
      const { container } = render(
        <CAlert color="primary" dismissible>
          Test
        </CAlert>
      )
      expect(container.firstChild).toHaveClass('alert-dismissible')
      expect(container.querySelector('.btn-close')).toBeInTheDocument()
    })

    it('should close an alert', () => {
      vi.useFakeTimers()
      const onClose = vi.fn()
      const { container } = render(
        <CAlert color="primary" dismissible onClose={onClose}>
          Test
        </CAlert>
      )

      act(() => {
        fireEvent.click(container.querySelector('.btn-close')!)
        vi.runAllTimers()
      })

      expect(onClose).toHaveBeenCalledTimes(1)
      vi.useRealTimers()
    })

    it('should emit closed after the transition', async () => {
      const onClosed = vi.fn()
      const { container } = render(
        <CAlert color="primary" dismissible onClosed={onClosed}>
          Test
        </CAlert>
      )

      fireEvent.click(container.querySelector('.btn-close')!)

      await waitFor(() => expect(onClosed).toHaveBeenCalledTimes(1))
    })
  })

  describe('transition', () => {
    it('should apply the fade class', () => {
      const { container } = render(<CAlert color="primary">Test</CAlert>)
      expect(container.firstChild).toHaveClass('fade')
    })

    it('should not apply the fade class when transition is disabled', () => {
      const { container } = render(
        <CAlert color="primary" transition={false}>
          Test
        </CAlert>
      )
      expect(container.firstChild).not.toHaveClass('fade')
    })
  })

  describe('visibility', () => {
    it('should not render when visible is false', () => {
      const { container } = render(
        <CAlert color="primary" visible={false}>
          Test
        </CAlert>
      )
      expect(container.firstChild).toBeNull()
    })
  })
})
