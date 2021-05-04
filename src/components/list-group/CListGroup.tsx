import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CListGroupProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'ul'
   */
  component?: string | ElementType
  /**
   * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., <CCard>) [docs]
   */
  flush?: boolean
  /**
   * Specify a layout type. [docs]
   */
  layout?:
    | 'horizontal'
    | 'horizontal-sm'
    | 'horizontal-md'
    | 'horizontal-lg'
    | 'horizontal-xl'
    | 'horizontal-xxl'
}

export const CListGroup = forwardRef<HTMLDivElement | HTMLUListElement, CListGroupProps>(
  ({ children, className, component: Component = 'ul', flush, layout }, ref) => {
    const _className = classNames(
      'list-group',
      {
        'list-group-flush': flush,
        [`list-group-${layout}`]: layout,
      },
      className,
    )

    return (
      <Component className={_className} ref={ref}>
        {children}
      </Component>
    )
  },
)

CListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  flush: PropTypes.bool,
  layout: PropTypes.oneOf([
    'horizontal',
    'horizontal-sm',
    'horizontal-md',
    'horizontal-lg',
    'horizontal-xl',
    'horizontal-xxl',
  ]),
}

CListGroup.displayName = 'CListGroup'
