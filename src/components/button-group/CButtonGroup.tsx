import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  // TODO: clean-up
  // /**
  //  * Define a string that labels the current element. Use it in cases where a text label is not visible on the screen. [docs]
  //  */
  // ariaLabel?: string
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
   */
  size?: string
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
