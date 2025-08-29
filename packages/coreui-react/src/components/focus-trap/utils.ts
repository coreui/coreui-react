import React from 'react'
import { FOCUSABLE_TAGS } from './const'

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

export const isVisible = (el: Element): boolean => {
  const htmlEl = el as HTMLElement
  return !!htmlEl.offsetParent || htmlEl.getClientRects().length > 0
}

export const isFocusable = (el: HTMLElement): boolean => {
  if (
    ('disabled' in el &&
      (el as HTMLInputElement | HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement)
        .disabled) ||
    el.closest('[inert]')
  )
    return false

  const tabIndexAttr = el.getAttribute('tabindex')
  const tabIndex = tabIndexAttr === null ? undefined : Number(tabIndexAttr)
  const hasValidTabIndex = tabIndex !== undefined && tabIndex >= 0

  const tagName = el.tagName.toLowerCase()
  const isHiddenInput = tagName === 'input' && (el as HTMLInputElement).type === 'hidden'

  if (isHiddenInput) return false

  const isFocusableElement =
    FOCUSABLE_TAGS.has(tagName) ||
    (tagName === 'a' && !!(el as HTMLAnchorElement).href) ||
    el.hasAttribute('contenteditable') ||
    hasValidTabIndex

  return isFocusableElement && isVisible(el)
}

export const isTabbable = (el: HTMLElement): boolean => {
  if (!isFocusable(el)) return false
  const tabIndexAttr = el.getAttribute('tabindex')
  const tabIndex = tabIndexAttr === null ? undefined : Number(tabIndexAttr)
  return tabIndex === undefined || tabIndex >= 0
}
