import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CFormTextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
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
  /**
   * Method called immediately after the `value` prop changes. [docs]
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. [docs]
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component. [docs]
   */
  readOnly?: boolean
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

export const CFormTextarea = forwardRef<HTMLTextAreaElement, CFormTextareaProps>(
  ({ children, className, invalid, plainText, valid, ...rest }, ref) => {
    const _className = classNames(
      plainText ? 'form-control-plaintext' : 'form-control',
      {
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )
    return (
      <textarea className={_className} {...rest} ref={ref}>
        {children}
      </textarea>
    )
  },
)

CFormTextarea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  plainText: PropTypes.bool,
  valid: PropTypes.bool,
}

CFormTextarea.displayName = 'CFormTextarea'
