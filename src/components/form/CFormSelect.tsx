import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CFormSelectProps extends HTMLAttributes<HTMLSelectElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Specifies the number of visible options in a drop-down list.
   */
  htmlSize?: number
  /**
   * TODO: . [docs]
   */
  invalid?: boolean
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  size?: 'sm' | 'lg'
  /**
   * TODO: . [docs]
   */
  valid?: boolean
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
