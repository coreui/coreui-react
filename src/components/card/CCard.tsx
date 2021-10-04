import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface CCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | 'high-emphasis' | 'medium-emphasis' | 'disabled' | 'high-emphasis-inverse' | 'medium-emphasis-inverse' | 'disabled-inverse' | string
   */
  textColor?: string
}

export const CCard = forwardRef<HTMLDivElement, CCardProps>(
  ({ children, className, color, textColor, ...rest }, ref) => {
    const _className = classNames(
      'card',
      {
        [`bg-${color}`]: color,
        [`text-${textColor}`]: textColor,
      },
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  textColor: PropTypes.string,
}

CCard.displayName = 'CCard'
