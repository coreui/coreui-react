import * as React from 'react'
import { render, screen } from '@testing-library/react'
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

  test('focuses container when focusFirstElement is false (default)', () => {
    const mockFocus = jest.fn()
    const originalFocus = HTMLElement.prototype.focus
    HTMLElement.prototype.focus = mockFocus

    render(<TestComponent active={true} />)

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(mockFocus).toHaveBeenCalledWith({ preventScroll: true })

    HTMLElement.prototype.focus = originalFocus
  })

  test('does not trap focus when active is false', () => {
    render(<TestComponent active={false} />)

    // Focus should not be moved to any element
    expect(screen.getByTestId('container')).not.toHaveFocus()
    expect(screen.getByTestId('first-button')).not.toHaveFocus()
  })

  test('handles container with no tabbable elements', () => {
    const mockFocus = jest.fn()
    const originalFocus = HTMLElement.prototype.focus
    HTMLElement.prototype.focus = mockFocus

    render(
      <CFocusTrap active={true}>
        <div data-testid="empty-container">No focusable elements</div>
      </CFocusTrap>
    )

    const container = screen.getByTestId('empty-container')
    expect(container).toBeInTheDocument()
    expect(mockFocus).toHaveBeenCalledWith({ preventScroll: true })

    HTMLElement.prototype.focus = originalFocus
  })

  test('calls onActivate callback when trap becomes active', () => {
    const onActivate = jest.fn()

    const { rerender } = render(<TestComponent active={false} onActivate={onActivate} />)
    expect(onActivate).not.toHaveBeenCalled()

    // Re-render with active=true
    rerender(<TestComponent active={true} onActivate={onActivate} />)
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

    expect(removeEventListenerSpy).toHaveBeenCalledWith('focusin', expect.any(Function), true)

    removeEventListenerSpy.mockRestore()
  })

  test('focuses first element when focusFirstElement is true', () => {
    const mockFocus = jest.fn()
    const originalFocus = HTMLElement.prototype.focus
    HTMLElement.prototype.focus = mockFocus

    render(<TestComponent active={true} focusFirstElement={true} />)

    const firstButton = screen.getByTestId('first-button')
    expect(firstButton).toBeInTheDocument()
    expect(mockFocus).toHaveBeenCalledWith({ preventScroll: true })

    HTMLElement.prototype.focus = originalFocus
  })

  test('works with additionalContainer prop', () => {
    const additionalRef = React.createRef<HTMLDivElement>()

    render(
      <div>
        <CFocusTrap active={true} additionalContainer={additionalRef}>
          <div data-testid="main-container">
            <button data-testid="main-button">Main Button</button>
          </div>
        </CFocusTrap>
        <div ref={additionalRef} data-testid="additional-container">
          <button data-testid="additional-button">Additional Button</button>
        </div>
      </div>
    )

    const mainContainer = screen.getByTestId('main-container')
    const additionalContainer = screen.getByTestId('additional-container')

    expect(mainContainer).toBeInTheDocument()
    expect(additionalContainer).toBeInTheDocument()
  })

  test('restores focus when restoreFocus is true', () => {
    // Mock document.activeElement to simulate a focused element
    const focusButton = document.createElement('button')
    focusButton.dataset.testid = 'focus-button'
    document.body.appendChild(focusButton)

    const mockFocus = jest.fn()
    focusButton.focus = mockFocus

    // Mock document.activeElement
    Object.defineProperty(document, 'activeElement', {
      value: focusButton,
      writable: true,
      configurable: true,
    })

    const { rerender } = render(<TestComponent active={false} restoreFocus={true} />)

    // Activate the trap (should store the previous focused element)
    rerender(<TestComponent active={true} restoreFocus={true} />)

    // Deactivate the trap (should restore focus)
    rerender(<TestComponent active={false} restoreFocus={true} />)

    // Verify focus restoration was attempted
    expect(mockFocus).toHaveBeenCalledWith({ preventScroll: true })

    focusButton.remove()
  })

  test('does not restore focus when restoreFocus is false', () => {
    // Mock document.activeElement to simulate a focused element
    const focusButton = document.createElement('button')
    focusButton.dataset.testid = 'focus-button'
    document.body.appendChild(focusButton)

    const mockFocus = jest.fn()
    focusButton.focus = mockFocus

    // Mock document.activeElement
    Object.defineProperty(document, 'activeElement', {
      value: focusButton,
      writable: true,
      configurable: true,
    })

    const { rerender } = render(<TestComponent active={false} restoreFocus={false} />)

    // Activate the trap (should store the previous focused element)
    rerender(<TestComponent active={true} restoreFocus={false} />)

    // Deactivate the trap (should NOT restore focus)
    rerender(<TestComponent active={false} restoreFocus={false} />)

    // Verify focus restoration was not attempted
    expect(mockFocus).not.toHaveBeenCalledWith({ preventScroll: true })

    focusButton.remove()
  })
})
