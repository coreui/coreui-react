import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CFormFeedbackProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Method called immediately after the `value` prop changes.
   */
  invalid?: boolean
  /**
   * If your form layout allows it, you can display validation feedback in a styled tooltip.
   */
  tooltip?: boolean
  /**
   * Set component validation state to valid.
   */
  valid?: boolean
}

export const CFormFeedback = forwardRef<HTMLDivElement | HTMLSpanElement, CFormFeedbackProps>(
  (
    { children, className, component: Component = 'div', invalid, tooltip, valid, ...rest },
    ref,
  ) => {
    const _className = classNames(
      {
        [`invalid-${tooltip ? 'tooltip' : 'feedback'}`]: invalid,
        [`valid-${tooltip ? 'tooltip' : 'feedback'}`]: valid,
      },
      className,
    )
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  invalid: PropTypes.bool,
  tooltip: PropTypes.bool,
  valid: PropTypes.bool,
}

CFormFeedback.displayName = 'CFormFeedback'
