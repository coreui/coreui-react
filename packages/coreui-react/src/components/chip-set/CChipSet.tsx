import React, { ElementType, HTMLAttributes, KeyboardEvent, ReactNode, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useChipSet } from './useChipSet'
import { PolymorphicRefForwardingComponent } from '../../helpers'
import { useForkedRef } from '../../hooks'

export interface CChipSetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Provides an accessible label for the remove button of every chip rendered by the React Chip Set component.
   */
  ariaRemoveLabel?: string
  /**
   * Specifies the root element or custom component used by the React Chip Set component.
   */
  as?: ElementType
  /**
   * Adds custom classes to the React Chip Set root element.
   */
  className?: string
  /**
   * Sets the initial uncontrolled selection of the React Chip Set component.
   */
  defaultValue?: string[]
  /**
   * Disables every chip rendered by the React Chip Set component.
   */
  disabled?: boolean
  /**
   * Turns the chips into filter chips, each showing a leading check icon while selected.
   */
  filter?: boolean
  /**
   * Callback fired when the selected chip values of the React Chip Set component change.
   */
  onChange?: (selected: string[]) => void
  /**
   * Callback fired when a chip requests removal. The chips are controlled by their rendered children, so remove the chip from your data in response.
   */
  onRemove?: (value: string) => void
  /**
   * Displays a remove button on every chip rendered by the React Chip Set component.
   */
  removable?: boolean
  /**
   * Replaces the default remove icon on every chip with a custom icon node.
   */
  removeIcon?: ReactNode
  /**
   * Enables selection behavior for the chips rendered by the React Chip Set component.
   */
  selectable?: boolean
  /**
   * Replaces the default selected icon shown by filter chips with a custom icon node.
   */
  selectedIcon?: ReactNode
  /**
   * Sets how many chips can be selected at once in the React Chip Set component.
   */
  selectionMode?: 'single' | 'multiple'
  /**
   * Controls the selected chip values rendered by the React Chip Set component.
   *
   * @controllable onChange
   */
  value?: string[]
}

export const CChipSet: PolymorphicRefForwardingComponent<'div', CChipSetProps> = forwardRef<
  HTMLDivElement,
  CChipSetProps
>(
  (
    {
      ariaRemoveLabel,
      as: Component = 'div',
      children,
      className,
      defaultValue,
      disabled,
      filter,
      onChange,
      onKeyDown,
      onRemove,
      removable,
      removeIcon,
      selectable,
      selectedIcon,
      selectionMode,
      value,
      ...rest
    },
    ref
  ) => {
    const { rootRef, handleKeyDown, renderChips } = useChipSet({
      ariaRemoveLabel,
      defaultValue,
      disabled,
      filter,
      removable,
      removeIcon,
      selectable,
      selectedIcon,
      selectionMode,
      value,
      onRemoveChip: onRemove,
      onSelectionChange: onChange,
    })
    const forkedRef = useForkedRef(ref, rootRef)

    return (
      <Component
        className={classNames('chip-set', { disabled }, className)}
        {...(disabled && { 'aria-disabled': true })}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          handleKeyDown(event)
          onKeyDown?.(event)
        }}
        {...rest}
        ref={forkedRef}
      >
        {renderChips(children)}
      </Component>
    )
  }
)

CChipSet.propTypes = {
  ariaRemoveLabel: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
  filter: PropTypes.bool,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  removeIcon: PropTypes.node,
  selectable: PropTypes.bool,
  selectedIcon: PropTypes.node,
  selectionMode: PropTypes.oneOf(['single', 'multiple']),
  value: PropTypes.array,
}

CChipSet.displayName = 'CChipSet'
