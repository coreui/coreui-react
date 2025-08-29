import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CFocusTrap } from '../CFocusTrap'

// Helper function to create a test component with focusable elements
interface TestComponentProps {
  children?: React.ReactNode
  [key: string]: any
}

const TestComponent = ({ children, ...props }: TestComponentProps) => (
  <CFocusTrap {...props}>
    <div data-testid="container">
      <button data-testid="first-button">First</button>
      <input data-testid="input" type="text" placeholder="Input field" />
      <a href="#" data-testid="link">
        Link
      </a>
      <button data-testid="last-button">Last</button>
      {children}
    </div>
  </CFocusTrap>
)

describe('CFocusTrap', () => {
  beforeEach(() => {
    // Reset document focus before each test
    document.body.focus()
  })

  test('loads and displays CFocusTrap component', () => {
    const { container } = render(
      <CFocusTrap>
        <div data-testid="test-content">Test Content</div>
      </CFocusTrap>
    )
    expect(container).toMatchSnapshot()
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })

  test('CFocusTrap with custom props', () => {
    const onActivate = jest.fn()
    const onDeactivate = jest.fn()

    const { container } = render(
      <CFocusTrap
        active={true}
        restoreFocus={false}
        focusFirstElement={false}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      >
        <div data-testid="custom-container">Custom Content</div>
      </CFocusTrap>
    )

    expect(container).toMatchSnapshot()
    expect(onActivate).toHaveBeenCalledTimes(1)
  })

  test('focuses container when focusFirstElement is false (default)', async () => {
    render(<TestComponent active={true} />)

    await waitFor(() => {
      expect(screen.getByTestId('container')).toHaveFocus()
    })
  })

  test('does not trap focus when active is false', () => {
    render(<TestComponent active={false} />)

    // Focus should not be moved to any element
    expect(screen.getByTestId('container')).not.toHaveFocus()
    expect(screen.getByTestId('first-button')).not.toHaveFocus()
  })

  test('handles container with no tabbable elements', async () => {
    render(
      <CFocusTrap active={true}>
        <div data-testid="empty-container">No focusable elements</div>
      </CFocusTrap>
    )

    const container = screen.getByTestId('empty-container')

    // Container should receive focus and have tabindex="-1" added
    await waitFor(() => {
      expect(container).toHaveFocus()
      expect(container).toHaveAttribute('tabindex', '-1')
    })
  })

  test('calls onActivate callback when trap becomes active', () => {
    const onActivate = jest.fn()

    render(<TestComponent active={false} onActivate={onActivate} />)
    expect(onActivate).not.toHaveBeenCalled()

    // Re-render with active=true
    render(<TestComponent active={true} onActivate={onActivate} />)
    expect(onActivate).toHaveBeenCalledTimes(1)
  })

  test('calls onDeactivate callback when trap becomes inactive', () => {
    const onDeactivate = jest.fn()

    const { rerender } = render(<TestComponent active={true} onDeactivate={onDeactivate} />)
    expect(onDeactivate).not.toHaveBeenCalled()

    // Deactivate the trap
    rerender(<TestComponent active={false} onDeactivate={onDeactivate} />)
    expect(onDeactivate).toHaveBeenCalledTimes(1)
  })

  test('cleans up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const { unmount } = render(<TestComponent active={true} />)

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function), true)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('focusin', expect.any(Function), true)

    removeEventListenerSpy.mockRestore()
  })
})
