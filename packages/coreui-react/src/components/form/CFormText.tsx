import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CFormTextProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CFormText = forwardRef<HTMLDivElement | HTMLSpanElement, CFormTextProps>(
  ({ children, className, component: Component = 'div', ...rest }, ref) => {
    return (
      <Component className={classNames('form-text', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CFormText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CFormText.displayName = 'CFormText'
