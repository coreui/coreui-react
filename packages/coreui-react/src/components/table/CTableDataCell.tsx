import React, { forwardRef, TdHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface CTableDataCellProps
  extends Omit<TdHTMLAttributes<HTMLTableDataCellElement>, 'align'> {
  /**
   * Highlight a table row or cell.
   */
  active?: boolean
  /**
   * Set the vertical aligment.
   */
  align?: 'bottom' | 'middle' | 'top'
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
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

CTableDataCell.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(['bottom', 'middle', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
}

CTableDataCell.displayName = 'CTableDataCell'
