import React, { ElementType, FC, HTMLAttributes, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Popper, PopperChildrenProps } from 'react-popper'

import { Placements } from '../Types'
import { Alignments, CDropdownContext } from './CDropdown'

export interface CDropdownMenuProps
  extends HTMLAttributes<HTMLDivElement | HTMLUListElement>,
    Omit<
      PopperChildrenProps,
      | 'arrowProps'
      | 'forceUpdate'
      | 'hasPopperEscaped'
      | 'isReferenceHidden'
      | 'placement'
      | 'ref'
      | 'style'
      | 'update'
    > {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CDropdownMenu: FC<CDropdownMenuProps> = ({
  children,
  className,
  component: Component = 'ul',
  ...rest
}) => {
  const {
    alignment,
    autoClose,
    dark,
    direction,
    dropdownToggleRef,
    placement,
    popper,
    visible,
    setVisible,
  } = useContext(CDropdownContext)

  const dropdownMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    visible && window.addEventListener('mouseup', handleMouseUp)
    visible && window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [visible])

  const handleKeyup = (event: KeyboardEvent) => {
    if (autoClose === false) {
      return
    }

    if (event.key === 'Escape') {
      setVisible(false)
    }
  }

  const handleMouseUp = (event: Event) => {
    if (dropdownToggleRef && dropdownToggleRef.current.contains(event.target as HTMLElement)) {
      return
    }

    if (
      autoClose === true ||
      (autoClose === 'inside' && dropdownMenuRef.current?.contains(event.target as HTMLElement)) ||
      (autoClose === 'outside' && !dropdownMenuRef.current?.contains(event.target as HTMLElement))
    ) {
      setTimeout(() => setVisible(false), 1)
      return
    }
  }

  let _placement: Placements = placement

  if (direction === 'center') {
    _placement = 'bottom'
  }

  if (direction === 'dropup') {
    _placement = 'top-start'
  }

  if (direction === 'dropup-center') {
    _placement = 'top'
  }

  if (direction === 'dropend') {
    _placement = 'right-start'
  }

  if (direction === 'dropstart') {
    _placement = 'left-start'
  }

  if (alignment === 'end') {
    _placement = 'bottom-end'
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

  const _className = classNames(
    'dropdown-menu',
    {
      'dropdown-menu-dark': dark,
      show: visible,
    },
    alignment && alignmentClassNames(alignment),
    className,
  )

  const dropdownMenuComponent = (style?: React.CSSProperties, ref?: React.Ref<HTMLDivElement>) => {
    return (
      <Component
        className={_className}
        ref={ref}
        style={style}
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
    )
  }

  return popper && visible ? (
    <Popper innerRef={dropdownMenuRef} placement={_placement}>
      {({ ref, style }) => dropdownMenuComponent(style, ref)}
    </Popper>
  ) : (
    dropdownMenuComponent()
  )
}

CDropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CDropdownMenu.displayName = 'CDropdownMenu'
