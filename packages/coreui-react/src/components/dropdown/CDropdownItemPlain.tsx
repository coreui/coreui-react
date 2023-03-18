import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CDropdownItemPlainProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CDropdownItemPlain = forwardRef<HTMLSpanElement, CDropdownItemPlainProps>(
  ({ children, className, component: Component = 'span', ...rest }, ref) => {
    return (
      <Component className={classNames('dropdown-item-text', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CDropdownItemPlain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CDropdownItemPlain.displayName = 'CDropdownItemPlain'
