import React, {
  ElementType,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { PolymorphicRefForwardingComponent } from '../../helpers'
import { useForkedRef } from '../../hooks'
import { colorPropType } from '../../props'
import type { Colors } from '../../types'

export interface CChipProps extends HTMLAttributes<HTMLSpanElement | HTMLButtonElement> {
  /**
   * Toggles the active state of the React Chip component for non-selectable usage.
   */
  active?: boolean
  /**
   * Provides an accessible label for the remove button in the React Chip component.
   */
  ariaRemoveLabel?: string
  /**
   * Specifies the root element or custom component used by the React Chip component.
   */
  as?: ElementType
  /**
   * Adds custom classes to the React Chip root element.
   */
  className?: string
  /**
   * Enables interactive hover styling and pointer cursor for the React Chip component.
   */
  clickable?: boolean
  /**
   * Sets the contextual color of the React Chip component using CoreUI theme colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Disables the React Chip component and removes interactive behavior.
   */
  disabled?: boolean
  /**
   * Callback fired when the React Chip component becomes deselected.
   */
  onDeselect?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void
  /**
   * Callback fired when the React Chip component requests removal by button click or keyboard action.
   */
  onRemove?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLElement>) => void
  /**
   * Callback fired when the React Chip component becomes selected.
   */
  onSelect?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void
  /**
   * Callback fired when the selected state of the React Chip component changes.
   */
  onSelectedChange?: (
    selected: boolean,
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => void
  /**
   * Displays a remove button inside the React Chip component.
   */
  removable?: boolean
  /**
   * Replaces the default remove icon with a custom icon node in the React Chip component.
   */
  removeIcon?: ReactNode
  /**
   * Enables selectable behavior and keyboard toggle support for the React Chip component.
   */
  selectable?: boolean
  /**
   * Controls the selected state of a selectable React Chip component.
   */
  selected?: boolean
  /**
   * Sets the size of the React Chip component to small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Sets the visual variant of the React Chip component to outline style.
   */
  variant?: 'outline'
}

const SELECTOR_FOCUSABLE_ITEMS = '[data-coreui-chip-focusable="true"]:not(.disabled)'

export const CChip: PolymorphicRefForwardingComponent<'span', CChipProps> = forwardRef<
  HTMLSpanElement | HTMLButtonElement,
  CChipProps
>(
  (
    {
      active,
      ariaRemoveLabel = 'Remove',
      children,
      as: Component = 'span',
      className,
      clickable,
      color,
      disabled,
      onClick,
      onDeselect,
      onKeyDown,
      onRemove,
      onSelect,
      onSelectedChange,
      removable,
      removeIcon,
      selectable,
      selected,
      size,
      tabIndex,
      variant,
      ...rest
    },
    ref
  ) => {
    const chipRef = useRef<HTMLSpanElement | HTMLButtonElement>(null)
    const forkedRef = useForkedRef(ref, chipRef)
    const isSelectedControlled = selected !== undefined
    const [_selected, setSelected] = useState(Boolean(selected))
    const selectedState = isSelectedControlled ? Boolean(selected) : _selected

    useEffect(() => {
      if (isSelectedControlled) {
        setSelected(Boolean(selected))
      }
    }, [isSelectedControlled, selected])

    const isFocusable = useMemo(
      () => Boolean(!disabled && (selectable || removable)),
      [disabled, selectable, removable]
    )

    const getFocusableSibling = (shouldGetNext: boolean) => {
      const currentElement = chipRef.current
      if (!currentElement?.parentElement) {
        return null
      }

      const chips = Array.from(
        currentElement.parentElement.querySelectorAll<HTMLElement>(SELECTOR_FOCUSABLE_ITEMS)
      )

      const index = chips.indexOf(currentElement as unknown as HTMLElement)
      if (index === -1 || chips.length <= 1) {
        return null
      }

      const targetIndex = shouldGetNext ? index + 1 : index - 1
      return chips[targetIndex] ?? null
    }

    const navigateToEdge = (targetIndex: 0 | -1) => {
      const currentElement = chipRef.current
      if (!currentElement?.parentElement) {
        return
      }

      const chips = Array.from(
        currentElement.parentElement.querySelectorAll<HTMLElement>(SELECTOR_FOCUSABLE_ITEMS)
      )
      const edgeChip = targetIndex === -1 ? chips[chips.length - 1] : chips[0]
      edgeChip?.focus()
    }

    const setSelectableState = (
      nextSelected: boolean,
      event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
    ) => {
      if (!selectable || disabled || nextSelected === selectedState) {
        return
      }

      if (!isSelectedControlled) {
        setSelected(nextSelected)
      }

      if (nextSelected) {
        onSelect?.(event)
      } else {
        onDeselect?.(event)
      }

      onSelectedChange?.(nextSelected, event)
    }

    const toggleSelectedState = (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
      setSelectableState(!selectedState, event)
    }

    const handleRemove = (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLElement>) => {
      onRemove?.(event)
    }

    const handleRemoveClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      handleRemove(event)
    }

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return
      }

      if ((event.target as HTMLElement).closest('.chip-remove')) {
        return
      }

      if (selectable) {
        toggleSelectedState(event)
      }

      onClick?.(event)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      if (disabled) {
        onKeyDown?.(event)
        return
      }

      switch (event.key) {
        case 'Enter':
        case ' ':
        case 'Spacebar': {
          if (selectable) {
            event.preventDefault()
            toggleSelectedState(event)
          }
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (removable) {
            event.preventDefault()
            const sibling = getFocusableSibling(false) || getFocusableSibling(true)
            sibling?.focus()
            handleRemove(event)
          }
          break
        }

        case 'ArrowLeft': {
          event.preventDefault()
          const sibling = getFocusableSibling(false)
          sibling?.focus()
          if (selectedState && event.shiftKey) {
            sibling?.dispatchEvent(new CustomEvent('coreui-chip-select'))
          }
          break
        }

        case 'ArrowRight': {
          event.preventDefault()
          const sibling = getFocusableSibling(true)
          sibling?.focus()
          if (selectedState && event.shiftKey) {
            sibling?.dispatchEvent(new CustomEvent('coreui-chip-select'))
          }
          break
        }

        case 'Home': {
          event.preventDefault()
          navigateToEdge(0)
          break
        }

        case 'End': {
          event.preventDefault()
          navigateToEdge(-1)
          break
        }

        // No default
      }

      onKeyDown?.(event)
    }

    return (
      <Component
        className={classNames(
          'chip',
          {
            active: selectable ? selectedState : active,
            disabled,
            [`chip-${color}`]: color,
            [`chip-${size}`]: size,
            'chip-clickable': clickable || selectable || Boolean(onClick),
            'chip-outline': variant === 'outline',
          },
          className
        )}
        data-coreui-chip-focusable={isFocusable || undefined}
        {...(disabled && { 'aria-disabled': true })}
        {...(selectable && { 'aria-selected': selectedState })}
        {...(isFocusable && tabIndex === undefined && { tabIndex: 0 })}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...(Component === 'button' && { disabled })}
        {...rest}
        ref={forkedRef}
      >
        {children}
        {removable && (
          <button
            type="button"
            className="chip-remove"
            aria-label={ariaRemoveLabel}
            onClick={handleRemoveClick}
            tabIndex={-1}
            disabled={disabled}
          >
            {removeIcon ?? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="12" y2="12" />
                <line x1="12" y1="4" x2="4" y2="12" />
              </svg>
            )}
          </button>
        )}
      </Component>
    )
  }
)

CChip.propTypes = {
  active: PropTypes.bool,
  ariaRemoveLabel: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  color: colorPropType,
  disabled: PropTypes.bool,
  onDeselect: PropTypes.func,
  onRemove: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectedChange: PropTypes.func,
  removable: PropTypes.bool,
  removeIcon: PropTypes.node,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(['outline']),
}

CChip.displayName = 'CChip'
