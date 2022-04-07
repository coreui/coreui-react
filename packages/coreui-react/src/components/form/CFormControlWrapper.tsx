import React, { FC, ReactNode } from 'react'

import PropTypes from 'prop-types'

import { CFormFeedback, CFormFloating, CFormLabel, CFormText } from './'

export interface CFormControlWrapperProps {
  /**
   * @ignore
   */
  children?: ReactNode
  /**
   * @ignore
   */
  describedby?: string
  /**
   * Provide valuable, actionable feedback.
   *
   * @since 4.2.0
   */
  feedback?: ReactNode | string
  /**
   * Provide valuable, actionable feedback.
   *
   * @since 4.2.0
   */
  feedbackInvalid?: ReactNode | string
  /**
   * Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
   *
   * @since 4.2.0
   */
  feedbackValid?: ReactNode | string
  /**
   * Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
   *
   * @since 4.2.0
   */
  floatingLabel?: ReactNode | string
  /**
   * @ignore
   */
  id?: string
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
   * Set component validation state to valid.
   */
  valid?: boolean
}

export const CFormControlWrapper: FC<CFormControlWrapperProps> = ({
  children,
  describedby,
  feedback,
  feedbackInvalid,
  feedbackValid,
  floatingLabel,
  id,
  invalid,
  label,
  text,
  tooltipFeedback,
  valid,
}) => {
  return floatingLabel ? (
    <CFormFloating>
      {children}
      <CFormLabel htmlFor={id}>{label || floatingLabel}</CFormLabel>
    </CFormFloating>
  ) : (
    <>
      {label && <CFormLabel htmlFor={id}>{label}</CFormLabel>}
      {children}
      {text && <CFormText id={describedby}>{text}</CFormText>}
      {feedback && (valid || invalid) && (
        <CFormFeedback
          {...(invalid && { id: describedby })}
          invalid={invalid}
          tooltip={tooltipFeedback}
          valid={valid}
        >
          {feedback}
        </CFormFeedback>
      )}
      {feedbackInvalid && (
        <CFormFeedback id={describedby} invalid tooltip={tooltipFeedback}>
          {feedbackInvalid}
        </CFormFeedback>
      )}
      {feedbackValid && (
        <CFormFeedback valid tooltip={tooltipFeedback}>
          {feedbackValid}
        </CFormFeedback>
      )}
    </>
  )
}

CFormControlWrapper.propTypes = {
  children: PropTypes.node,
  describedby: PropTypes.string,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackValid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackInvalid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  floatingLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tooltipFeedback: PropTypes.bool,
  valid: PropTypes.bool,
}

CFormControlWrapper.displayName = 'CFormControlWrapper'
