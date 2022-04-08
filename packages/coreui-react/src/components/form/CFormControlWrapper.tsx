import React, { FC, ReactNode } from 'react'

import PropTypes from 'prop-types'

import { CFormControlValidation, CFormControlValidationProps } from './CFormControlValidation'
import { CFormFloating } from './CFormFloating'
import { CFormLabel } from './CFormLabel'
import { CFormText } from './CFormText'

export interface CFormControlWrapperProps extends CFormControlValidationProps {
  /**
   * @ignore
   */
  children?: ReactNode
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
      <CFormControlValidation
        describedby={describedby}
        feedback={feedback}
        feedbackInvalid={feedbackInvalid}
        feedbackValid={feedbackValid}
        floatingLabel={floatingLabel}
        invalid={invalid}
        tooltipFeedback={tooltipFeedback}
        valid={valid}
      />
    </>
  )
}

CFormControlWrapper.propTypes = {
  children: PropTypes.node,
  floatingLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  ...CFormControlValidation.propTypes,
}

CFormControlWrapper.displayName = 'CFormControlWrapper'
