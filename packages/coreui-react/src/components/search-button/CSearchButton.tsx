import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useForkedRef } from '../../hooks'
import {
  formatShortcutTokens,
  getPreferredShortcut,
  getPressedKeys,
  matchesShortcut,
  parseShortcut,
  shouldIgnoreShortcut,
} from './utils'

export interface CSearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content to customize the full button body.
   */
  children?: ReactNode
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Custom icon displayed before the placeholder text.
   */
  icon?: ReactNode
  /**
   * Placeholder content rendered inside `.search-button-placeholder`.
   */
  placeholder?: ReactNode
  /**
   * Callback fired when the component is activated by click or keyboard shortcut.
   */
  onTrigger?: () => void
  /**
   * Prevent the browser's default behavior when the configured shortcut matches.
   */
  preventDefault?: boolean
  /**
   * Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one.
   */
  shortcut?: string
}

export const CSearchButton = forwardRef<HTMLButtonElement, CSearchButtonProps>(
  (
    {
      children,
      className,
      disabled,
      icon,
      onClick,
      onTrigger,
      placeholder = 'Search',
      preventDefault = true,
      shortcut = 'meta+/,ctrl+/',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const forkedRef = useForkedRef(ref, buttonRef)
    const [activeKeys, setActiveKeys] = useState<string[]>([])
    const shortcuts = useMemo(() => parseShortcut(shortcut), [shortcut])
    const preferredShortcut = useMemo(() => getPreferredShortcut(shortcuts), [shortcuts])
    const shortcutTokens = useMemo(
      () => formatShortcutTokens(preferredShortcut?.shortcut || ''),
      [preferredShortcut]
    )

    const handleShortcut = useCallback(
      (event: KeyboardEvent) => {
        if (disabled || event.defaultPrevented || event.repeat || shouldIgnoreShortcut(event)) {
          return
        }

        const matchedShortcut = shortcuts.find((shortcut) => matchesShortcut(shortcut, event))

        if (!matchedShortcut) {
          return
        }

        if (preventDefault) {
          event.preventDefault()
        }

        onTrigger?.()
      },
      [disabled, onTrigger, preventDefault, shortcuts]
    )

    const handleDocumentKeydown = useCallback(
      (event: KeyboardEvent) => {
        setActiveKeys(Array.from(getPressedKeys(event)))
        handleShortcut(event)
      },
      [handleShortcut]
    )

    const handleDocumentKeyup = useCallback((event: KeyboardEvent) => {
      setActiveKeys(Array.from(getPressedKeys(event)))
    }, [])

    const handleWindowBlur = useCallback(() => {
      setActiveKeys([])
    }, [])

    useEffect(() => {
      if (typeof document === 'undefined' || typeof window === 'undefined') {
        return
      }

      document.addEventListener('keydown', handleDocumentKeydown)
      document.addEventListener('keyup', handleDocumentKeyup)
      window.addEventListener('blur', handleWindowBlur)

      return () => {
        document.removeEventListener('keydown', handleDocumentKeydown)
        document.removeEventListener('keyup', handleDocumentKeyup)
        window.removeEventListener('blur', handleWindowBlur)
      }
    }, [handleDocumentKeydown, handleDocumentKeyup, handleWindowBlur])

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      onTrigger?.()
    }

    return (
      <button
        type={type}
        className={classNames('search-button', className)}
        disabled={disabled}
        onClick={handleClick}
        {...rest}
        ref={forkedRef}
      >
        {children ?? (
          <>
            {icon ?? (
              <svg
                className="search-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="m479.6 399.716-81.084-81.084-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2 81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.837 23.894 76.573 76.572a24.03 24.03 0 0 1-.002 33.941"
                />
              </svg>
            )}
            <span className="search-button-placeholder">{placeholder}</span>
          </>
        )}
        <span className="search-button-keys" aria-hidden="true">
          {shortcutTokens.map((key) => (
            <span
              className={classNames('search-button-key', { active: activeKeys.includes(key) })}
              data-coreui-search-button-key={key}
              key={key}
            >
              {key}
            </span>
          ))}
        </span>
      </button>
    )
  }
)

CSearchButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onTrigger: PropTypes.func,
  placeholder: PropTypes.node,
  preventDefault: PropTypes.bool,
  shortcut: PropTypes.string,
}

CSearchButton.displayName = 'CSearchButton'
