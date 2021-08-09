import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CFormLabel } from './CFormLabel'

export interface CFormSwitchProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * The id global attribute defines an identifier (ID) that must be unique in the whole document. [docs]
   */
  id?: string
  /**
   * Set component validation state to invalid. [docs]
   */
  invalid?: boolean
  /**
   * The element represents a caption for a component. [docs]
   */
  label?: string | ReactNode
  /**
   * Size the component large or extra large. Works only with `switch` [docs]
   *
   * @type 'lg' | 'xl'
   */
  size?: 'lg' | 'xl'
  /**
   * Specifies the type of component. [docs]
   *
   * @type checkbox' | 'radio'
   * @default 'checkbox'
   */
  type?: 'checkbox' | 'radio'
  /**
   * Set component validation state to valid. [docs]
   */
  valid?: boolean
}

export const CFormSwitch = forwardRef<HTMLInputElement, CFormSwitchProps>(
  ({ className, id, invalid, label, size, type = 'checkbox', valid, ...rest }, ref) => {
    const _className = classNames(
      'form-check form-switch',
      {
        [`form-switch-${size}`]: size,
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )

    const inputClassName = classNames('form-check-input', {
      'is-invalid': invalid,
      'is-valid': valid,
    })
    const labelClassName = classNames('form-check-label')

    return (
      <div className={_className}>
        <input type={type} className={inputClassName} id={id} {...rest} ref={ref} />
        {label && (
          <CFormLabel customClassName={labelClassName} {...(id && { htmlFor: id })}>
            {label}
          </CFormLabel>
        )}
      </div>
    )
  },
)

CFormSwitch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['lg', 'xl']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  valid: PropTypes.bool,
}

CFormSwitch.displayName = 'CFormSwitch'
