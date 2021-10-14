import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CDropdownHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CDropdownHeader = forwardRef<HTMLHeadingElement, CDropdownHeaderProps>(
  ({ children, className, component: Component = 'h6', ...rest }, ref) => {
    const _className = classNames('dropdown-header', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CDropdownHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CDropdownHeader.displayName = 'CDropdownHeader'
