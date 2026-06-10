import React, {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import { CChip, type CChipProps } from '../chip/CChip'
import { SELECTOR_CHIP_FOCUSABLE } from '../chip/const'
import { resolveChipValue } from './utils'
import { isRTL } from '../../utils'

export interface CChipSetItem extends Omit<CChipProps, 'value' | 'children'> {
  /**
   * The value that identifies the chip and tracks its selection.
   */
  value: string
  /**
   * The chip content. Falls back to `value` when omitted.
   */
  label?: ReactNode
}

// Build a CChip element from a data item (string or descriptor).
const buildChip = (item: string | CChipSetItem) => {
  if (typeof item === 'string') {
    return React.createElement(CChip, { key: item, value: item }, item)
  }

  const { label, value, ...chipProps } = item
  return React.createElement(CChip, { key: value, value, ...chipProps }, label ?? value)
}

export interface UseChipSetOptions {
  ariaRemoveLabel?: string
  defaultSelected?: string[]
  disabled?: boolean
  filter?: boolean
  removable?: boolean
  removeIcon?: ReactNode
  /**
   * Move focus to a neighboring chip after one is removed. Containers that own a
   * different focus target after removal (e.g. CChipInput refocuses its input)
   * set this to `false`.
   */
  restoreFocusOnRemove?: boolean
  selectable?: boolean
  selected?: string[]
  selectedIcon?: ReactNode
  selectionMode?: 'single' | 'multiple'
  onRemoveChip?: (value: string) => void
  onSelectionChange?: (selected: string[]) => void
}

/**
 * The shared chip-set engine. Both `CChipSet` and `CChipInput` build on it — the
 * React equivalent of the vanilla `ChipInput extends ChipSet`. It owns selection
 * coordination (single/multiple, controlled-or-uncontrolled), roving focus, the
 * focus-a-neighbor-after-removal behavior, and the per-chip prop injection.
 * Existence of the chips stays with the caller (its children / value list).
 */
export const useChipSet = (options: UseChipSetOptions) => {
  const {
    ariaRemoveLabel,
    defaultSelected = [],
    disabled,
    filter,
    removable,
    removeIcon,
    restoreFocusOnRemove = true,
    selectable,
    selected,
    selectedIcon,
    selectionMode = 'multiple',
    onRemoveChip,
    onSelectionChange,
  } = options

  const rootRef = useRef<HTMLDivElement>(null)
  const pendingFocusValue = useRef<string | null>(null)
  const isControlled = selected !== undefined
  const [_selected, setSelected] = useState<string[]>(defaultSelected)
  // In controlled mode the selected prop drives selection directly; _selected is
  // only read when uncontrolled, so no syncing effect is needed.
  const selectedValues = isControlled ? (selected as string[]) : _selected

  // Focus the saved neighbor once the removed chip has left the DOM.
  useEffect(() => {
    if (pendingFocusValue.current === null) {
      return
    }

    const selector = `[data-coreui-chip-value="${pendingFocusValue.current}"]`
    rootRef.current?.querySelector<HTMLElement>(selector)?.focus()
    pendingFocusValue.current = null
  })

  const getFocusableChips = (): HTMLElement[] => [
    ...(rootRef.current?.querySelectorAll<HTMLElement>(SELECTOR_CHIP_FOCUSABLE) ?? []),
  ]

  const emitSelection = (next: string[]) => {
    if (!isControlled) {
      setSelected(next)
    }
    onSelectionChange?.(next)
  }

  const updateSelection = (chipValue: string, nextSelected: boolean) => {
    const isSelected = selectedValues.includes(chipValue)
    if (nextSelected === isSelected) {
      return
    }

    if (nextSelected) {
      // Single selection mode keeps only the freshly selected chip.
      emitSelection(selectionMode === 'single' ? [chipValue] : [...selectedValues, chipValue])
      return
    }

    emitSelection(selectedValues.filter((item) => item !== chipValue))
  }

  const clearSelection = () => {
    if (selectedValues.length > 0) {
      emitSelection([])
    }
  }

  const removeChip = (chipValue: string) => {
    if (restoreFocusOnRemove) {
      const chips = getFocusableChips()
      const index = chips.findIndex((chip) => chip.dataset.coreuiChipValue === chipValue)
      // Prefer the next chip, fall back to the previous one at the end.
      const neighbor = chips[index + 1] ?? chips[index - 1] ?? null
      pendingFocusValue.current = neighbor?.dataset.coreuiChipValue ?? null
    }

    emitSelection(selectedValues.filter((item) => item !== chipValue))
    onRemoveChip?.(chipValue)
  }

  // Roving focus: arrow keys move between chips and Home/End jump to the edges,
  // with no cycling. Returns true when the key was handled.
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): boolean => {
    const chip = (event.target as HTMLElement).closest<HTMLElement>(SELECTOR_CHIP_FOCUSABLE)
    if (!chip) {
      return false
    }

    const chips = getFocusableChips()
    const index = chips.indexOf(chip)
    // In RTL the visual direction is mirrored, so left/right swap.
    const rtl = isRTL(rootRef.current)

    switch (event.key) {
      case 'ArrowLeft': {
        event.preventDefault()
        chips[rtl ? index + 1 : index - 1]?.focus()
        return true
      }

      case 'ArrowRight': {
        event.preventDefault()
        chips[rtl ? index - 1 : index + 1]?.focus()
        return true
      }

      case 'Home': {
        event.preventDefault()
        chips[0]?.focus()
        return true
      }

      case 'End': {
        event.preventDefault()
        chips[chips.length - 1]?.focus()
        return true
      }

      default: {
        return false
      }
    }
  }

  const renderChips = (children: ReactNode): ReactNode =>
    React.Children.map(children, (child, index) => {
      if (!isValidElement<CChipProps>(child)) {
        return child
      }

      const chipValue = resolveChipValue(child, index)
      const childSelectable = child.props.selectable ?? selectable
      const childFilter = child.props.filter ?? filter
      const childRemovable = child.props.removable ?? removable
      const isCoordinated = Boolean(childSelectable || childFilter)

      return React.cloneElement(child, {
        ariaRemoveLabel: child.props.ariaRemoveLabel ?? ariaRemoveLabel,
        disabled: child.props.disabled ?? disabled,
        filter: childFilter,
        removable: childRemovable,
        removeIcon: child.props.removeIcon ?? removeIcon,
        selectable: childSelectable,
        selectedIcon: child.props.selectedIcon ?? selectedIcon,
        ...(isCoordinated && {
          selected: selectedValues.includes(chipValue),
          onSelectedChange: (
            nextSelected: boolean,
            event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
          ) => {
            updateSelection(chipValue, nextSelected)
            child.props.onSelectedChange?.(nextSelected, event)
          },
        }),
        ...(childRemovable && {
          onRemove: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLElement>) => {
            removeChip(chipValue)
            child.props.onRemove?.(event)
          },
        }),
      })
    })

  // Build CChip elements from data, then run them through the same transform —
  // used by CChipSet's `chips` prop and by CChipInput's value list.
  const renderChipsFromData = (items: (string | CChipSetItem)[]): ReactNode =>
    renderChips(items.map((item) => buildChip(item)))

  return {
    rootRef,
    selectedValues,
    clearSelection,
    getFocusableChips,
    handleKeyDown,
    renderChips,
    renderChipsFromData,
  }
}
