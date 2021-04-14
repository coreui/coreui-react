import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CAccordionItem = forwardRef<HTMLDivElement, CAccordionItemProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('accordion-item', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CAccordionItem.displayName = 'CAccordionItem'
