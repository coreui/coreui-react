import React from 'react'

/**
 * Gets all focusable child elements within a container.
 * Uses a comprehensive selector to find elements that can receive focus.
 * @param element - The container element to search within
 * @returns Array of focusable HTML elements
 */
export const focusableChildren = (element: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    'details',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(',')

  const elements = [...element.querySelectorAll<HTMLElement>(focusableSelectors)] as HTMLElement[]

  return elements.filter((el) => !isDisabled(el) && isVisible(el))
}

/**
 * Extracts the ref from a React element, handling version differences between React 18 and 19+.
 *
 * In React 18 and earlier, refs are stored directly on the element object.
 * In React 19+, refs are stored in the element's props object due to changes in React's internals.
 * This function automatically detects the React version and uses the appropriate access pattern.
 * @param child - The React element to extract the ref from
 * @returns The ref attached to the element, or undefined if no ref is present
 */
export const getChildRef = (child: React.ReactElement): React.Ref<HTMLElement> | undefined => {
  const major = Number(React.version?.split?.('.')[0] ?? 18)
  // React 18 stores ref directly on the element
  if (major <= 18 && 'ref' in child && child.ref !== undefined) {
    return (child as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref
  }

  // React 19 stores ref in props
  if (child.props && typeof child.props === 'object' && 'ref' in child.props) {
    return (child.props as { ref?: React.Ref<HTMLElement> }).ref
  }

  return undefined
}

/**
 * Checks if an element is disabled.
 * Considers various ways an element can be disabled including CSS classes and attributes.
 * @param element - The HTML element to check
 * @returns True if the element is disabled, false otherwise
 */
export const isDisabled = (element: HTMLElement): boolean => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true
  }

  if (element.classList.contains('disabled')) {
    return true
  }

  if ('disabled' in element && typeof element.disabled === 'boolean') {
    return element.disabled
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
}

/**
 * Type guard to check if an object is an Element.
 * Handles edge cases including jQuery objects.
 * @param object - The object to check
 * @returns True if the object is an Element, false otherwise
 */
export const isElement = (object: unknown): object is Element => {
  if (!object || typeof object !== 'object') {
    return false
  }

  return 'nodeType' in object && typeof object.nodeType === 'number'
}

/**
 * Checks if an element is visible in the DOM.
 * Considers client rects and computed visibility styles, handling edge cases like details elements.
 * @param element - The HTML element to check for visibility
 * @returns True if the element is visible, false otherwise
 */
export const isVisible = (element: HTMLElement): boolean => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false
  }

  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'

  // Handle `details` element as its content may falsely appear visible when it is closed
  const closedDetails = element.closest('details:not([open])')

  if (!closedDetails) {
    return elementIsVisible
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary')

    // Check if summary is a direct child of the closed details
    if (summary?.parentNode !== closedDetails) {
      return false
    }
  }

  return elementIsVisible
}

/**
 * Merges multiple React refs into a single ref callback.
 * Handles both function refs and ref objects, gracefully ignoring failures.
 * @param refs - Array of React refs to merge
 * @returns A ref callback that applies to all provided refs
 */
export const mergeRefs =
  <T>(...refs: (React.Ref<T> | undefined)[]) =>
  (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(node)
      } else {
        try {
          ;(ref as React.RefObject<T>).current = node
        } catch {
          // Ignore assignment failures for read-only refs
        }
      }
    })
  }
