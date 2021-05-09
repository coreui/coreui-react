import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  // /**
  //  * The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. [docs]
  //  */
  // role?: string
  /**
   * Size the component small or large. [docs]
   *
   * @type {'sm' | 'lg'}
   */
  size?: 'sm' | 'lg'
  /**
   * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here. [docs]
   */
  vertical?: boolean
}

export const CButtonGroup = forwardRef<HTMLDivElement, CButtonGroupProps>(
  (
    {
      children,
      // ariaLabel,
      className,
      // role,
      size,
      vertical,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      vertical ? 'btn-group-vertical' : 'btn-group',
      { [`btn-group-${size}`]: size },
      className,
    )

    return (
      <div
        className={_className}
        // {...(ariaLabel && { 'aria-label': ariaLabel })}
        // {...(role && { role: role })}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

CButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  vertical: PropTypes.bool,
}

CButtonGroup.displayName = 'CButtonGroup'
