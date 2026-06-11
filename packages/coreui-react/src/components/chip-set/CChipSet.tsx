import React, {
  ElementType,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useChipSet, type CChipSetItem } from './useChipSet'
import { PolymorphicRefForwardingComponent } from '../../helpers'
import { useForkedRef } from '../../hooks'

export type { CChipSetItem }

const itemValue = (item: string | CChipSetItem): string =>
  typeof item === 'string' ? item : item.value

export interface CChipSetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Provides an accessible label for the remove button of every chip rendered by the React Chip Set component.
   */
  ariaRemoveLabel?: string
  /**
   * Specifies the root element or custom component used by the React Chip Set component.
   */
  as?: ElementType
  /**
   * Renders chips from data instead of children. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props. Children are used when this is omitted.
   */
  chips?: (string | CChipSetItem)[]
  /**
   * Adds custom classes to the React Chip Set root element.
   */
  className?: string
  /**
   * Sets the initial uncontrolled chips. In this mode the React Chip Set component owns the list and removes chips itself; use `chips` (with `onRemove`) for a controlled list.
   */
  defaultChips?: (string | CChipSetItem)[]
  /**
   * Sets the initial uncontrolled selection of the React Chip Set component.
   */
  defaultSelected?: string[]
  /**
   * Disables every chip rendered by the React Chip Set component.
   */
  disabled?: boolean
  /**
   * Turns the chips into filter chips, each showing a leading check icon while selected.
   */
  filter?: boolean
  /**
   * Callback fired when a chip requests removal. The chips are controlled by their rendered children, so remove the chip from your data in response.
   */
  onRemove?: (value: string) => void
  /**
   * Callback fired when the selected chip values of the React Chip Set component change.
   */
  onSelect?: (selected: string[]) => void
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
   * Controls the selected chip values of the React Chip Set component.
   *
   * @controllable onSelect
   */
  selected?: string[]
  /**
   * Replaces the default selected icon shown by filter chips with a custom icon node.
   */
  selectedIcon?: ReactNode
  /**
   * Sets how many chips can be selected at once in the React Chip Set component.
   */
  selectionMode?: 'single' | 'multiple'
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
      chips,
      className,
      defaultChips,
      defaultSelected,
      disabled,
      filter,
      onKeyDown,
      onRemove,
      onSelect,
      removable,
      removeIcon,
      selectable,
      selected,
      selectedIcon,
      selectionMode,
      ...rest
    },
    ref
  ) => {
    // The chip list is controlled by `chips` (or children) or, with `defaultChips`,
    // uncontrolled — then the set owns the list and removes chips itself.
    const isUncontrolledList = chips === undefined && defaultChips !== undefined
    const [_chips, setChips] = useState<(string | CChipSetItem)[]>(defaultChips ?? [])

    const { rootRef, handleKeyDown, renderChips, renderChipsFromData } = useChipSet({
      ariaRemoveLabel,
      defaultSelected,
      disabled,
      filter,
      removable,
      removeIcon,
      selectable,
      selected,
      selectedIcon,
      selectionMode,
      onRemoveChip: (value) => {
        if (isUncontrolledList) {
          setChips((prev) => prev.filter((item) => itemValue(item) !== value))
        }
        onRemove?.(value)
      },
      onSelectionChange: onSelect,
    })
    const forkedRef = useForkedRef(ref, rootRef)

    const items = chips ?? (isUncontrolledList ? _chips : undefined)

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
        {items ? renderChipsFromData(items) : renderChips(children)}
      </Component>
    )
  }
)

CChipSet.propTypes = {
  ariaRemoveLabel: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
  chips: PropTypes.array,
  className: PropTypes.string,
  defaultChips: PropTypes.array,
  defaultSelected: PropTypes.array,
  disabled: PropTypes.bool,
  filter: PropTypes.bool,
  onRemove: PropTypes.func,
  onSelect: PropTypes.func,
  removable: PropTypes.bool,
  removeIcon: PropTypes.node,
  selectable: PropTypes.bool,
  selected: PropTypes.array,
  selectedIcon: PropTypes.node,
  selectionMode: PropTypes.oneOf(['single', 'multiple']),
}

CChipSet.displayName = 'CChipSet'
