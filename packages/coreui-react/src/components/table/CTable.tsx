import React, { forwardRef, TableHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface CTableProps extends TableHTMLAttributes<HTMLTableElement> {
  /**
   * Set the vertical aligment.
   */
  align?: 'bottom' | 'middle' | 'top'
  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  borderColor?: Colors
  /**
   * Add borders on all sides of the table and cells.
   */
  bordered?: boolean
  /**
   * Remove borders on all sides of the table and cells.
   */
  borderless?: boolean
  /**
   * Put the `<caption>` on the top of the table.
   */
  caption?: 'top'
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
  /**
   * Enable a hover state on table rows within a `<CTableBody>`.
   */
  hover?: boolean
  /**
   * Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   */
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * Make table more compact by cutting all cell `padding` in half.
   */
  small?: boolean
  /**
   * Add zebra-striping to any table row within the `<CTableBody>`.
   */
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

CTable.propTypes = {
  align: PropTypes.oneOf(['bottom', 'middle', 'top']),
  borderColor: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  caption: PropTypes.oneOf(['top']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  small: PropTypes.bool,
  striped: PropTypes.bool,
}

CTable.displayName = 'CTable'
