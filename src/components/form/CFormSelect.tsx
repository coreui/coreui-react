import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
  ({ children, className, htmlSize, invalid, size, valid, ...rest }, ref) => {
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
        {children}
      </select>
    )
  },
)

CFormSelect.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlSize: PropTypes.number,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  valid: PropTypes.bool,
}

CFormSelect.displayName = 'CFormSelect'
