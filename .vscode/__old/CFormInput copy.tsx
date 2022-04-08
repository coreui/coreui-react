import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { CFormFeedback, CFormFloating, CFormLabel, CFormText } from './'

export interface CFormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Provide valuable, actionable feedback.
   *
   * @since 4.2.0
   */
  feedback?: ReactNode | string
  /**
   * Add a caption for a component, and turn on floating label styling.
   *
   * @since 4.2.0
   */
  floatingLabel?: ReactNode | string
  /**
   * Set component validation state to invalid.
   */
  invalid?: boolean
  /**
   * Add a caption for a component.
   *
   * @since 4.2.0
   */
  label?: ReactNode | string
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly` [docs]
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component.
   */
  readOnly?: boolean
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Add helper text to the component.
   *
   * @since 4.2.0
   */
  text?: ReactNode | string
  /**
   * Display validation feedback in a styled tooltip.
   *
   * @since 4.2.0
   */
  tooltipFeedback?: boolean
  /**
   * Specifies the type of component.
   */
  type?: 'color' | 'file' | 'text' | string
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

export const CFormInput = forwardRef<HTMLInputElement, CFormInputProps>(
  (
    {
      children,
      className,
      feedback,
      floatingLabel,
      invalid,
      label,
      plainText,
      size,
      text,
      tooltipFeedback,
      type = 'text',
      valid,
      ...rest
    },
    ref,
  ) => {
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
    return floatingLabel ? (
      <CFormFloating>
        <input className={_className} type={type} {...rest} ref={ref}>
          {children}
        </input>
        <CFormLabel htmlFor={rest.id}>{label || floatingLabel}</CFormLabel>
      </CFormFloating>
    ) : (
      <>
        {label && <CFormLabel htmlFor={rest.id}>{label}</CFormLabel>}
        <input className={_className} type={type} {...rest} ref={ref}>
          {children}
        </input>
        {text && <CFormText id={rest['aria-describedby']}>{text}</CFormText>}
        {feedback && (valid || invalid) && (
          <CFormFeedback
            id={rest['aria-describedby']}
            invalid={invalid}
            tooltip={tooltipFeedback}
            valid={valid}
          >
            {feedback}
          </CFormFeedback>
        )}
      </>
    )
  },
)

CFormInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  floatingLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  plainText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tooltipFeedback: PropTypes.bool,
  type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
  valid: PropTypes.bool,
}

CFormInput.displayName = 'CFormInput'
