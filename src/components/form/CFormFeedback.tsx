import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CFormFeedbackProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'div'
   */
  component?: string | ElementType
  /**
   * TODO: . [docs]
   */
  invalid?: boolean
  /**
   * TODO: . [docs]
   */
  tooltip?: boolean
  /**
   * TODO: . [docs]
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

CFormFeedback.displayName = 'CFormFeedback'
