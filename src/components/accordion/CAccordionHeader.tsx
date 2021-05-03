import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CAccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CAccordionHeader = forwardRef<HTMLDivElement, CAccordionHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('accordion-header', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CAccordionHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CAccordionHeader.displayName = 'CAccordionHeader'
