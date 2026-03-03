import React, {
  ClipboardEvent,
  FocusEvent,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CChip } from '../chip/CChip'
import { useForkedRef } from '../../hooks'

type ChipClassName = string | ((value: string) => string)

export interface CChipInputProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'onInput' | 'onSelect'
> {
  /**
   * Adds custom classes to the React Chip Input component root element.
   */
  className?: string
  /**
   * Adds custom classes to chips rendered by the React Chip Input component. Accepts a static className or a resolver function based on chip value.
   */
  chipClassName?: ChipClassName
  /**
   * Creates a new chip when the React Chip Input component loses focus with a pending value.
   */
  createOnBlur?: boolean
  /**
   * Sets the initial uncontrolled values rendered by the React Chip Input component.
   */
  defaultValue?: string[]
  /**
   * Disables the React Chip Input component and prevents adding, removing, or selecting chips.
   */
  disabled?: boolean
  /**
   * Sets the `id` of the internal text input rendered by the React Chip Input component.
   */
  id?: string
  /**
   * Renders an inline label inside the React Chip Input component container.
   */
  label?: ReactNode
  /**
   * Sets the maximum number of chips that can be created in the React Chip Input component.
   */
  maxChips?: number | null
  /**
   * Sets the name of the hidden input used by the React Chip Input component for form submission.
   */
  name?: string
  /**
   * Callback fired when the React Chip Input component adds a new chip.
   */
  onAdd?: (value: string) => void
  /**
   * Callback fired when the value list of the React Chip Input component changes.
   */
  onChange?: (values: string[]) => void
  /**
   * Callback fired when the internal text input value changes in the React Chip Input component.
   */
  onInput?: (value: string) => void
  /**
   * Callback fired when the React Chip Input component removes a chip.
   */
  onRemove?: (value: string) => void
  /**
   * Callback fired when the selected chip values change in the React Chip Input component.
   */
  onSelect?: (selected: string[]) => void
  /**
   * Sets placeholder text for the internal input of the React Chip Input component.
   */
  placeholder?: string
  /**
   * Makes the React Chip Input component readonly while keeping values visible.
   */
  readOnly?: boolean
  /**
   * Displays remove buttons on chips managed by the React Chip Input component.
   */
  removable?: boolean
  /**
   * Enables chip selection behavior in the React Chip Input component.
   */
  selectable?: boolean
  /**
   * Sets the separator character used to create chips while typing or pasting in the React Chip Input component.
   */
  separator?: string | null
  /**
   * Sets the size of the React Chip Input component to small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Controls the values rendered by the React Chip Input component.
   *
   * @controllable onChange
   */
  value?: string[]
}

const resolveChipClassName = (chipClassName: ChipClassName | undefined, value: string) => {
  if (!chipClassName) {
    return
  }

  if (typeof chipClassName === 'function') {
    const resolvedClassName = chipClassName(value)
    return typeof resolvedClassName === 'string' ? resolvedClassName : undefined
  }

  return chipClassName
}

const uniqueValues = (values: string[]) => [
  ...new Set(values.map((value) => value.trim()).filter(Boolean)),
]

export const CChipInput = forwardRef<HTMLDivElement, CChipInputProps>(
  (
    {
      className,
      chipClassName,
      createOnBlur = true,
      defaultValue = [],
      disabled,
      id,
      label,
      maxChips = null,
      name,
      onAdd,
      onChange,
      onInput,
      onRemove,
      onSelect,
      placeholder = '',
      readOnly,
      removable = true,
      selectable,
      separator = ',',
      size,
      value,
      ...rest
    },
    ref
  ) => {
    const isControlled = value !== undefined
    const [_values, setValues] = useState<string[]>(() => uniqueValues(defaultValue))
    const [inputValue, setInputValue] = useState('')
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const forkedRef = useForkedRef(ref, rootRef)

    const values = useMemo(
      () => uniqueValues(isControlled ? (value as string[]) : _values),
      [isControlled, value, _values]
    )

    useEffect(() => {
      setSelectedValues((prev) => prev.filter((item) => values.includes(item)))
    }, [values])

    const emitValuesChange = (nextValues: string[]) => {
      if (!isControlled) {
        setValues(nextValues)
      }
      onChange?.(nextValues)
    }

    const canAddMore = maxChips === null || values.length < maxChips

    const add = (rawValue: string) => {
      if (disabled || readOnly) {
        return false
      }

      const normalizedValue = String(rawValue).trim()
      if (!normalizedValue || values.includes(normalizedValue) || !canAddMore) {
        return false
      }

      const nextValues = [...values, normalizedValue]
      emitValuesChange(nextValues)
      onAdd?.(normalizedValue)
      return true
    }

    const remove = (valueToRemove: string) => {
      if (disabled || readOnly) {
        return false
      }

      if (!values.includes(valueToRemove)) {
        return false
      }

      const nextValues = values.filter((item) => item !== valueToRemove)
      emitValuesChange(nextValues)
      setSelectedValues((prev) => {
        const nextSelected = prev.filter((item) => item !== valueToRemove)
        if (nextSelected.length !== prev.length) {
          onSelect?.(nextSelected)
        }
        return nextSelected
      })
      onRemove?.(valueToRemove)
      return true
    }

    const createFromInput = () => {
      if (add(inputValue)) {
        setInputValue('')
      }
    }

    const focusLastChip = () => {
      if (!rootRef.current) {
        return
      }

      const focusableChips = [
        ...rootRef.current.querySelectorAll<HTMLElement>(
          '[data-coreui-chip-focusable="true"]:not(.disabled)'
        ),
      ]
      if (focusableChips.length === 0) {
        return
      }
      focusableChips[focusableChips.length - 1].focus()
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'Enter': {
          event.preventDefault()
          createFromInput()
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (inputValue === '') {
            event.preventDefault()
            focusLastChip()
          }
          break
        }

        case 'ArrowLeft': {
          if (event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === 0) {
            event.preventDefault()
            focusLastChip()
          }
          break
        }

        case 'Escape': {
          setInputValue('')
          event.currentTarget.blur()
          break
        }

        // No default
      }
    }

    const handleInputChange = (value: string) => {
      if (disabled || readOnly) {
        return
      }

      if (separator && value.includes(separator)) {
        const parts = value.split(separator)
        const chipsToAdd = uniqueValues(parts.slice(0, -1))
        const nextValues = [...values]

        for (const chipValue of chipsToAdd) {
          if (maxChips !== null && nextValues.length >= maxChips) {
            break
          }
          if (!nextValues.includes(chipValue)) {
            nextValues.push(chipValue)
            onAdd?.(chipValue)
          }
        }

        if (nextValues.length !== values.length) {
          emitValuesChange(nextValues)
        }

        const tail = parts[parts.length - 1] || ''
        setInputValue(tail)
        onInput?.(tail)
        return
      }

      setInputValue(value)
      onInput?.(value)
    }

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly || !separator) {
        return
      }

      const pastedData = event.clipboardData.getData('text')
      if (!pastedData.includes(separator)) {
        return
      }

      event.preventDefault()
      const chipsToAdd = uniqueValues(pastedData.split(separator))
      const nextValues = [...values]

      for (const chipValue of chipsToAdd) {
        if (maxChips !== null && nextValues.length >= maxChips) {
          break
        }
        if (!nextValues.includes(chipValue)) {
          nextValues.push(chipValue)
          onAdd?.(chipValue)
        }
      }

      if (nextValues.length !== values.length) {
        emitValuesChange(nextValues)
      }

      setInputValue('')
      onInput?.('')
    }

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!createOnBlur) {
        return
      }

      if ((event.relatedTarget as HTMLElement | null)?.closest('.chip')) {
        return
      }

      createFromInput()
    }

    const handleContainerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.target === inputRef.current) {
        return
      }

      if (event.key.length === 1) {
        inputRef.current?.focus()
      }
    }

    const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === rootRef.current) {
        inputRef.current?.focus()
      }
    }

    const handleSelectedChange = (chipValue: string, selected: boolean) => {
      setSelectedValues((prev) => {
        const nextSelected = selected
          ? uniqueValues([...prev, chipValue])
          : prev.filter((value) => value !== chipValue)
        onSelect?.(nextSelected)
        return nextSelected
      })
    }

    const inputSize = Math.max(placeholder.length, inputValue.length, 1)

    return (
      <div
        className={classNames(
          'chip-input',
          {
            'chip-input-sm': size === 'sm',
            'chip-input-lg': size === 'lg',
            disabled,
          },
          className
        )}
        aria-disabled={disabled ? true : undefined}
        aria-readonly={readOnly ? true : undefined}
        onClick={handleContainerClick}
        onKeyDown={handleContainerKeyDown}
        {...rest}
        ref={forkedRef}
      >
        {label && (
          <label className="chip-input-label" htmlFor={id}>
            {label}
          </label>
        )}

        {values.map((chipValue) => (
          <CChip
            key={chipValue}
            className={resolveChipClassName(chipClassName, chipValue)}
            removable={Boolean(removable && !disabled && !readOnly)}
            ariaRemoveLabel={`Remove ${chipValue}`}
            disabled={disabled}
            onRemove={() => remove(chipValue)}
            selectable={selectable}
            selected={selectedValues.includes(chipValue)}
            onSelectedChange={(selected) => handleSelectedChange(chipValue, selected)}
          >
            {chipValue}
          </CChip>
        ))}

        <input
          type="text"
          id={id}
          className="chip-input-field"
          disabled={disabled}
          readOnly={Boolean(!disabled && readOnly)}
          placeholder={placeholder}
          size={inputSize}
          value={inputValue}
          onBlur={handleInputBlur}
          onChange={(event) => handleInputChange(event.target.value)}
          onKeyDown={handleInputKeyDown}
          onPaste={handlePaste}
          onFocus={() => {
            if (selectedValues.length > 0) {
              setSelectedValues([])
              onSelect?.([])
            }
          }}
          ref={inputRef}
        />

        {name && <input type="hidden" name={name} value={values.join(',')} />}
      </div>
    )
  }
)

CChipInput.propTypes = {
  chipClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  createOnBlur: PropTypes.bool,
  defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  maxChips: PropTypes.number,
  name: PropTypes.string,
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onRemove: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  removable: PropTypes.bool,
  selectable: PropTypes.bool,
  separator: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  value: PropTypes.array,
}

CChipInput.displayName = 'CChipInput'
