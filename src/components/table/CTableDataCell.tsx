import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'

export interface CTableDataCellProps extends HTMLAttributes<HTMLTableDataCellElement> {
  active?: boolean
  align?: 'bottom' | 'middle' | 'top' | string
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
}

export const CTableDataCell = forwardRef<HTMLTableDataCellElement, CTableDataCellProps>(
  ({ children, active, align, className, color, ...rest }, ref) => {
    const _className = classNames(
      {
        [`align-${align}`]: align,
        'table-active': active,
        [`table-${color}`]: color,
      },
      className,
    )

    return (
      <td className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </td>
    )
  },
)
