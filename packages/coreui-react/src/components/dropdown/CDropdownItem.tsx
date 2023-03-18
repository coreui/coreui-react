import React, { ElementType, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLink, CLinkProps } from '../link/CLink'

export interface CDropdownItemProps extends CLinkProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CDropdownItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, CDropdownItemProps>(
  ({ children, className, component = 'a', ...rest }, ref) => {
    return (
      <CLink
        className={classNames('dropdown-item', className)}
        component={component}
        {...rest}
        ref={ref}
      >
        {children}
      </CLink>
    )
  },
)

CDropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CDropdownItem.displayName = 'CDropdownItem'
