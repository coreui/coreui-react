import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCardTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CCardText = forwardRef<HTMLParagraphElement, CCardTextProps>(
  ({ children, component: Component = 'p', className, ...rest }, ref) => {
    return (
      <Component className={classNames('card-text', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CCardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CCardText.displayName = 'CCardText'
