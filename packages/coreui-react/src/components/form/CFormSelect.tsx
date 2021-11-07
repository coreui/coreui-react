import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

type Option = {
  disabled?: boolean
  label?: string
  value?: string
}
export interface CFormSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Specifies the number of visible options in a drop-down list.
   */
  htmlSize?: number
  /**
   * Set component validation state to invalid.
   */
  invalid?: boolean
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>
  /**
   * Options list of the select component. Available keys: `label`, `value`, `disabled`.
   * Examples:
   * - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}`
   * - `options={['js', 'html']}`
   */
  options?: Option[] | string[]
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Set component validation state to valid.
   */
  valid?: boolean
  /**
   * The `value` attribute of component.
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const CFormSelect = forwardRef<HTMLSelectElement, CFormSelectProps>(
  ({ children, className, htmlSize, invalid, options, size, valid, ...rest }, ref) => {
    const _className = classNames(
      'form-select',
      {
        [`form-select-${size}`]: size,
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )
    return (
      <select className={_className} size={htmlSize} {...rest} ref={ref}>
        {options
          ? options.map((option, index) => {
              return (
                <option
                  {...(typeof option === 'object' &&
                    option.disabled && { disabled: option.disabled })}
                  {...(typeof option === 'object' && option.value && { value: option.value })}
                  key={index}
                >
                  {typeof option === 'string' ? option : option.label}
                </option>
              )
            })
          : children}
      </select>
    )
  },
)

CFormSelect.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlSize: PropTypes.number,
  invalid: PropTypes.bool,
  options: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'lg']),
  valid: PropTypes.bool,
}

CFormSelect.displayName = 'CFormSelect'
