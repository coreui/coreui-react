import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'

export interface CTableProps extends HTMLAttributes<HTMLTableElement> {
  align?: 'bottom' | 'middle' | 'top' | string
  borderColor?: Colors
  bordered?: boolean
  borderless?: boolean
  caption?: 'top'
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color: Colors
  hover?: boolean
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  small?: boolean
  striped?: boolean
}

export const CTable = forwardRef<HTMLTableElement, CTableProps>(
  (
    {
      children,
      align,
      borderColor,
      bordered,
      borderless,
      caption,
      className,
      color,
      hover,
      responsive,
      small,
      striped,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      'table',
      {
        [`align-${align}`]: align,
        [`caption-${caption}`]: caption,
        [`border-${borderColor}`]: borderColor,
        'table-bordered': bordered,
        'table-borderless': borderless,
        [`table-${color}`]: color,
        'table-hover': hover,
        'table-sm': small,
        'table-striped': striped,
      },
      className,
    )

    return responsive ? (
      <div
        className={
          typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`
        }
      >
        <table className={_className ? _className : undefined} {...rest} ref={ref}>
          {children}
        </table>
      </div>
    ) : (
      <table className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </table>
    )
  },
)
