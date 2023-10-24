import React, { ElementType, forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Alignments, CDropdownContext } from './CDropdown'
import { CConditionalPortal } from '../conditional-portal'

import { useForkedRef } from '../../hooks'

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

const alignmentClassNames = (alignment: Alignments) => {
  const classNames: string[] = []
  if (typeof alignment === 'object') {
    Object.keys(alignment).map((key) => {
      classNames.push(`dropdown-menu${key === 'xs' ? '' : `-${key}`}-${alignment[key]}`)
    })
  }

  if (typeof alignment === 'string') {
    classNames.push(`dropdown-menu-${alignment}`)
  }

  return classNames
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
              'dropdown-menu-dark': dark,
              show: visible,
            },
            alignment && alignmentClassNames(alignment),
            className,
          )}
          ref={forkedRef}
          role="menu"
          aria-hidden={!visible}
          {...(!popper && { 'data-coreui-popper': 'static' })}
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
