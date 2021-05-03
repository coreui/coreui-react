import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CAccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. [docs]
   */
  flush?: boolean
}

export const CAccordion = forwardRef<HTMLDivElement, CAccordionProps>(
  ({ children, className, flush, ...rest }, ref) => {
    const _className = classNames('accordion', { 'accordion-flush': flush }, className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CAccordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flush: PropTypes.bool,
}

CAccordion.displayName = 'CAccordion'
