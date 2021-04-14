import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CAccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CAccordionBody = forwardRef<HTMLDivElement, CAccordionBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('accordion-body', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CAccordionBody.displayName = 'CAccordionBody'
