import React, { FC, ReactElement, cloneElement, useEffect, useRef } from 'react'
import { mergeRefs, focusableChildren, getChildRef } from './utils'

export interface CFocusTrapProps {
  /**
   * Controls whether the focus trap is active or inactive.
   * When `true`, focus will be trapped within the child element.
   * When `false`, normal focus behavior is restored.
   *
   * @default true
   */
  active?: boolean

  /**
   * Additional container elements to include in the focus trap.
   * Useful for floating elements like tooltips or popovers that are
   * rendered outside the main container but should be part of the trap.
   */
  additionalContainer?: React.RefObject<HTMLElement | null>

  /**
   * Single React element that renders a DOM node and forwards refs properly.
   * The focus trap will be applied to this element and all its focusable descendants.
   *
   * Requirements:
   * - Must be a single ReactElement (not an array or fragment)
   * - Must forward the ref to a DOM element
   * - Should contain focusable elements for proper trap behavior
   */
  children: ReactElement

  /**
   * Controls whether to focus the first selectable element or the container itself.
   * When `true`, focuses the first tabbable element within the container.
   * When `false`, focuses the container element directly.
   *
   * This is useful for containers that should receive focus themselves,
   * such as scrollable regions or custom interactive components.
   *
   * @default false
   */
  focusFirstElement?: boolean

  /**
   * Callback function invoked when the focus trap becomes active.
   * Useful for triggering additional accessibility announcements or analytics.
   */
  onActivate?: () => void

  /**
   * Callback function invoked when the focus trap is deactivated.
   * Can be used for cleanup, analytics, or triggering state changes.
   */
  onDeactivate?: () => void

  /**
   * Automatically restores focus to the previously focused element when the trap is deactivated.
   * This is crucial for accessibility as it maintains the user's place in the document
   * when returning from modal dialogs or overlay components.
   *
   * Recommended to be `true` for modal dialogs and popover components.
   *
   * @default true
   */
  restoreFocus?: boolean
}

export const CFocusTrap: FC<CFocusTrapProps> = ({
  active = true,
  additionalContainer,
  children,
  focusFirstElement = false,
  onActivate,
  onDeactivate,
  restoreFocus = true,
}) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const prevFocusedRef = useRef<HTMLElement | null>(null)
  const isActiveRef = useRef<boolean>(false)
  const lastTabNavDirectionRef = useRef<'forward' | 'backward'>('forward')
  const tabEventSourceRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const _additionalContainer = additionalContainer?.current || null

    if (!active || !container) {
      if (isActiveRef.current) {
        // Deactivate cleanup
        if (restoreFocus && prevFocusedRef.current?.isConnected) {
          prevFocusedRef.current.focus({ preventScroll: true })
        }

        onDeactivate?.()
        isActiveRef.current = false
        prevFocusedRef.current = null
      }

      return
    }

    // Remember focused element BEFORE we move focus into the trap
    prevFocusedRef.current = document.activeElement as HTMLElement | null

    // Activating…
    isActiveRef.current = true

    // Set initial focus
    if (focusFirstElement) {
      const elements = focusableChildren(container)
      if (elements.length > 0) {
        elements[0].focus({ preventScroll: true })
      } else {
        // Fallback to container if no focusable elements
        container.focus({ preventScroll: true })
      }
    } else {
      container.focus({ preventScroll: true })
    }

    onActivate?.()

    const handleFocusIn = (event: FocusEvent) => {
      // Only handle focus events from tab navigation
      if (containerRef.current !== tabEventSourceRef.current) {
        return
      }

      const target = event.target as Node

      // Allow focus within container
      if (target === document || target === container || container.contains(target)) {
        return
      }

      // Allow focus within additional elements
      if (
        _additionalContainer &&
        (target === _additionalContainer || _additionalContainer.contains(target))
      ) {
        return
      }

      // Focus escaped, bring it back
      const elements = focusableChildren(container)

      if (elements.length === 0) {
        container.focus({ preventScroll: true })
        return
      }

      if (lastTabNavDirectionRef.current === 'backward') {
        elements.at(-1)?.focus({ preventScroll: true })
      } else {
        elements[0].focus({ preventScroll: true })
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return
      }

      tabEventSourceRef.current = container
      lastTabNavDirectionRef.current = event.shiftKey ? 'backward' : 'forward'

      const containerElements = focusableChildren(container)
      const additionalElements = _additionalContainer ? focusableChildren(_additionalContainer) : []

      if (containerElements.length === 0 && additionalElements.length === 0) {
        // No focusable elements, prevent tab
        event.preventDefault()
        return
      }

      const focusableElements = [...containerElements, ...additionalElements]

      const firstFocusableElement = focusableElements[0] as HTMLElement
      const lastFocusableElement = focusableElements.at(-1) as HTMLElement
      const activeElement = document.activeElement as HTMLElement

      if (event.shiftKey && activeElement === firstFocusableElement) {
        event.preventDefault()
        lastFocusableElement.focus()
        return
      }

      if (!event.shiftKey && activeElement === lastFocusableElement) {
        event.preventDefault()
        firstFocusableElement.focus()
        return
      }

      if (!_additionalContainer) {
        return
      }

      const isInContainer = containerElements.includes(activeElement)
      const isInAdditional = additionalElements.includes(activeElement)

      // Handle tab navigation between container and additional elements
      if (isInContainer) {
        const index = containerElements.indexOf(activeElement)

        if (
          !event.shiftKey &&
          index === containerElements.length - 1 &&
          additionalElements.length > 0
        ) {
          // Tab forward from last container element to first additional element
          event.preventDefault()
          additionalElements[0].focus({ preventScroll: true })
        } else if (event.shiftKey && index === 0 && additionalElements.length > 0) {
          // Tab backward from first container element to last additional element
          event.preventDefault()
          additionalElements.at(-1)?.focus({ preventScroll: true })
        }
      } else if (isInAdditional) {
        const index = additionalElements.indexOf(activeElement)

        if (
          !event.shiftKey &&
          index === additionalElements.length - 1 &&
          containerElements.length > 0
        ) {
          // Tab forward from last additional element to first container element
          event.preventDefault()
          containerElements[0].focus({ preventScroll: true })
        } else if (event.shiftKey && index === 0 && containerElements.length > 0) {
          // Tab backward from first additional element to last container element
          event.preventDefault()
          containerElements.at(-1)?.focus({ preventScroll: true })
        }
      }
    }

    // Add event listeners
    container.addEventListener('keydown', handleKeyDown, true)
    if (_additionalContainer) {
      _additionalContainer.addEventListener('keydown', handleKeyDown, true)
    }
    document.addEventListener('focusin', handleFocusIn, true)

    // Cleanup function
    return () => {
      container.removeEventListener('keydown', handleKeyDown, true)
      if (_additionalContainer) {
        _additionalContainer.removeEventListener('keydown', handleKeyDown, true)
      }
      document.removeEventListener('focusin', handleFocusIn, true)

      // On unmount (also considered deactivation)
      if (restoreFocus && prevFocusedRef.current?.isConnected) {
        prevFocusedRef.current.focus({ preventScroll: true })
      }

      if (isActiveRef.current) {
        onDeactivate?.()
        isActiveRef.current = false
      }

      prevFocusedRef.current = null
    }
  }, [active, additionalContainer, focusFirstElement, onActivate, onDeactivate, restoreFocus])

  // Attach our ref to the ONLY child — no extra wrappers
  const onlyChild = React.Children.only(children)

  // Handle different ref access patterns between React versions
  // React 19+: ref is accessed via element.props.ref
  // React 18 and earlier: ref is accessed via element.ref
  const childRef: React.Ref<HTMLElement> | undefined = getChildRef(onlyChild)

  const mergedRef = mergeRefs(childRef, (node: HTMLElement | null) => {
    containerRef.current = node
  })

  return cloneElement(onlyChild, { ref: mergedRef } as { ref: React.Ref<HTMLElement> })
}
