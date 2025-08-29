import React, { FC, ReactElement, cloneElement, useCallback, useEffect, useRef } from 'react'
import { mergeRefs, isTabbable } from './utils'
import { TABBABLE_SELECTOR } from './const'

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
  children,
  focusFirstElement = false,
  onActivate,
  onDeactivate,
  restoreFocus = true,
}) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const prevFocusedRef = useRef<HTMLElement | null>(null)
  const addedTabIndexRef = useRef<boolean>(false)
  const isActiveRef = useRef<boolean>(false)
  const focusingRef = useRef<boolean>(false)

  const getTabbables = useCallback((): HTMLElement[] => {
    const container = containerRef.current
    if (!container) {
      return []
    }

    // eslint-disable-next-line unicorn/prefer-spread
    const candidates = Array.from(container.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR))
    return candidates.filter((el) => isTabbable(el))
  }, [])

  const focusFirst = useCallback(() => {
    const container = containerRef.current
    if (!container || focusingRef.current) {
      return
    }

    focusingRef.current = true

    const tabbables = getTabbables()
    const target = focusFirstElement ? (tabbables[0] ?? container) : container
    // Ensure root can receive focus if there are no tabbables
    if (target === container && container.getAttribute('tabindex') == null) {
      container.setAttribute('tabindex', '-1')
      addedTabIndexRef.current = true
    }

    target.focus({ preventScroll: true })

    // Reset the flag after a short delay to allow the focus event to complete
    setTimeout(() => {
      focusingRef.current = false
    }, 0)
  }, [getTabbables, focusFirstElement])

  useEffect(() => {
    const container = containerRef.current
    if (!active || !container) {
      if (isActiveRef.current) {
        // Deactivate cleanup
        if (restoreFocus && prevFocusedRef.current && document.contains(prevFocusedRef.current)) {
          prevFocusedRef.current.focus({ preventScroll: true })
        }

        if (addedTabIndexRef.current) {
          container?.removeAttribute('tabindex')
          addedTabIndexRef.current = false
        }

        onDeactivate?.()
        isActiveRef.current = false
      }

      return
    }

    // Activating…
    isActiveRef.current = true
    onActivate?.()

    // Remember focused element BEFORE we move focus into the trap
    prevFocusedRef.current = (document.activeElement as HTMLElement) ?? null

    // Move focus inside if focus is outside the container
    if (!container.contains(document.activeElement)) {
      focusFirst()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') {
        return
      }

      const tabbables = getTabbables()
      const current = document.activeElement as HTMLElement | null

      if (tabbables.length === 0) {
        container.focus({ preventScroll: true })
        e.preventDefault()
        return
      }

      const first = tabbables[0]
      const last = tabbables.at(-1)!

      if (e.shiftKey) {
        if (!current || !container.contains(current) || current === first) {
          last.focus({ preventScroll: true })
          e.preventDefault()
        }
      } else {
        if (!current || !container.contains(current) || current === last) {
          first.focus({ preventScroll: true })
          e.preventDefault()
        }
      }
    }

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as Node
      if (!container.contains(target) && !focusingRef.current) {
        // Redirect stray focus back into the trap
        focusFirst()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('focusin', handleFocusIn, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('focusin', handleFocusIn, true)

      // On unmount (also considered deactivation)
      if (restoreFocus && prevFocusedRef.current && document.contains(prevFocusedRef.current)) {
        prevFocusedRef.current.focus({ preventScroll: true })
      }

      if (addedTabIndexRef.current) {
        container.removeAttribute('tabindex')
        addedTabIndexRef.current = false
      }

      onDeactivate?.()
      isActiveRef.current = false
    }
  }, [active, focusFirst, getTabbables, onActivate, onDeactivate, restoreFocus])

  // Attach our ref to the ONLY child — no extra wrappers.
  const onlyChild = React.Children.only(children)
  const childRef = (onlyChild as ReactElement & { ref?: React.Ref<HTMLElement> }).ref
  const mergedRef = mergeRefs(childRef, (node: HTMLElement | null) => {
    containerRef.current = node
  })

  return cloneElement(onlyChild, { ref: mergedRef } as { ref: React.Ref<HTMLElement> })
}
