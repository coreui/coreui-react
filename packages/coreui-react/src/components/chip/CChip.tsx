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
   * Turns the React Chip component into a filter chip. A filter chip is selectable and shows a leading check icon while selected.
   */
  filter?: boolean
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
   * Replaces the default selected icon shown by a filter React Chip component with a custom icon node.
   */
  selectedIcon?: ReactNode
  /**
   * Sets the size of the React Chip component to small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Sets the value associated with the React Chip component, used by `CChipSet` to track selection.
   */
  value?: string
  /**
   * Sets the visual variant of the React Chip component to outline style.
   */
  variant?: 'outline'
}

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
      filter,
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
      selectedIcon,
      size,
      tabIndex,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    // A filter chip is selectable by definition.
    const isSelectable = Boolean(selectable || filter)
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
      () => Boolean(!disabled && (isSelectable || removable)),
      [disabled, isSelectable, removable]
    )

    const setSelectableState = (
      nextSelected: boolean,
      event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
    ) => {
      if (!isSelectable || disabled || nextSelected === selectedState) {
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

      if (isSelectable) {
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
          if (isSelectable) {
            event.preventDefault()
            toggleSelectedState(event)
          }
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (removable) {
            event.preventDefault()
            handleRemove(event)
          }
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
            active: isSelectable ? selectedState : active,
            disabled,
            [`chip-${color}`]: color,
            [`chip-${size}`]: size,
            'chip-clickable': clickable || isSelectable || Boolean(onClick),
            'chip-outline': variant === 'outline',
          },
          className
        )}
        data-coreui-chip-focusable={isFocusable || undefined}
        data-coreui-chip-value={value}
        {...(disabled && { 'aria-disabled': true })}
        {...(isSelectable && { 'aria-selected': selectedState })}
        {...(isFocusable && tabIndex === undefined && { tabIndex: 0 })}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...(Component === 'button' && { disabled })}
        {...rest}
        ref={forkedRef}
      >
        {filter && selectedState && (
          <span className="chip-check" aria-hidden="true">
            {selectedIcon ?? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M425.373 89.373 196 318.745 86.627 209.373l-45.254 45.254L196 409.255l274.627-274.628z" />
              </svg>
            )}
          </span>
        )}
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
  filter: PropTypes.bool,
  onDeselect: PropTypes.func,
  onRemove: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectedChange: PropTypes.func,
  removable: PropTypes.bool,
  removeIcon: PropTypes.node,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  selectedIcon: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'lg']),
  value: PropTypes.string,
  variant: PropTypes.oneOf(['outline']),
}

CChip.displayName = 'CChip'
