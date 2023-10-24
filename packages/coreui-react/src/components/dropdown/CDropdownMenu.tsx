import React, { ElementType, forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CDropdownContext } from './CDropdown'
import { CConditionalPortal } from '../conditional-portal'

import { useForkedRef } from '../../hooks'

import { getAlignmentClassNames } from './utils'


export interface CDropdownMenuProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CDropdownMenu = forwardRef<HTMLDivElement | HTMLUListElement, CDropdownMenuProps>(
  ({ children, className, component: Component = 'ul', ...rest }, ref) => {
    const { alignment, container, dark, dropdownMenuRef, popper, portal, visible } =
      useContext(CDropdownContext)

    const forkedRef = useForkedRef(ref, dropdownMenuRef)

    return (
      <CConditionalPortal container={container} portal={portal ?? false}>
        <Component
          className={classNames(
            'dropdown-menu',
            {
              show: visible,
            },
            alignment && getAlignmentClassNames(alignment),
            className,
          )}
          ref={forkedRef}
          role="menu"
          aria-hidden={!visible}
          {...(!popper && { 'data-coreui-popper': 'static' })}
          {...(dark && { 'data-coreui-theme': 'dark' })}
          {...rest}
        >
          {Component === 'ul'
            ? React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                  return <li key={index}>{React.cloneElement(child)}</li>
                }
                return
              })
            : children}
        </Component>
      </CConditionalPortal>
    )
  },
)

CDropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CDropdownMenu.displayName = 'CDropdownMenu'
