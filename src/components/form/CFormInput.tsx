import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import { CFormLabel } from './CFormLabel'

export interface CFormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
  /**
   * Set component validation state to invalid. [docs]
   */
  invalid?: boolean
  // label?: string | ReactNode
  /**
   * Method called immediately after the `value` prop changes. [docs]
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly` [docs]
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component. [docs]
   */
  readOnly?: boolean
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  size?: 'sm' | 'lg'
  /**
   * Specifies the type of component. [docs]
   *
   * @type 'color' | 'file' | 'text' | string
   * @default 'text'
   */
  type?: 'color' | 'file' | 'text' | string
  /**
   * Set component validation state to valid. [docs]
   */
  valid?: boolean
  /**
   * The `value` attribute of component. [docs]
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const CFormInput = forwardRef<HTMLInputElement, CFormInputProps>(
  ({ children, className, invalid, plainText, size, type = 'text', valid, ...rest }, ref) => {
    const _className = classNames(
      plainText ? 'form-control-plaintext' : 'form-control',
      {
        [`form-control-${size}`]: size,
        'form-control-color': type === 'color',
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )
    return (
      <input type={type} className={_className} {...rest} ref={ref}>
        {children}
      </input>
    )
  },
)

CFormInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  plainText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
  valid: PropTypes.bool,
}

CFormInput.displayName = 'CFormInput'
