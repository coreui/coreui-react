import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { CFormControlWrapper, CFormControlWrapperProps } from './CFormControlWrapper'

export interface CFormInputProps
  extends CFormControlWrapperProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
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
   * Specifies the type of component.
   */
  type?: 'color' | 'file' | 'text' | string
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
      feedbackInvalid,
      feedbackValid,
      floatingLabel,
      id,
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
    return (
      <CFormControlWrapper
        describedby={rest['aria-describedby']}
        feedback={feedback}
        feedbackInvalid={feedbackInvalid}
        feedbackValid={feedbackValid}
        floatingLabel={floatingLabel}
        id={id}
        invalid={invalid}
        label={label}
        text={text}
        tooltipFeedback={tooltipFeedback}
        valid={valid}
      >
        <input className={_className} id={id} type={type} {...rest} ref={ref}>
          {children}
        </input>
      </CFormControlWrapper>
    )
  },
)

CFormInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  plainText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
  ...CFormControlWrapper.propTypes,
}

CFormInput.displayName = 'CFormInput'
