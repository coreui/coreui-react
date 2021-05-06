import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CAccordionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Set button state to collapsed. [docs]
   */
  collapsed?: boolean
}

export const CAccordionButton = forwardRef<HTMLButtonElement, CAccordionButtonProps>(
  ({ children, className, collapsed, ...rest }, ref) => {
    const _className = classNames('accordion-button', { collapsed: collapsed }, className)

    return (
      <button className={_className} {...rest} ref={ref}>
        {children}
      </button>
    )
  },
)

CAccordionButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
}

CAccordionButton.displayName = 'CAccordionButton'
