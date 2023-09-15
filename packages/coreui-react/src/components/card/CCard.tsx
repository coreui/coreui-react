import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { colorPropType } from '../../props'
import type { Colors } from '../../types'

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
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'primary-emphasis' | 'secondary-emphasis' | 'success-emphasis' | 'danger-emphasis' | 'warning-emphasis' | 'info-emphasis' | 'light-emphasis' | 'body' | 'body-emphasis' | 'body-secondary' | 'body-tertiary' | 'black' | 'black-50' | 'white' | 'white-50' | string
   */
  textColor?: string
}

export const CCard = forwardRef<HTMLDivElement, CCardProps>(
  ({ children, className, color, textColor, ...rest }, ref) => {
    return (
      <div
        className={classNames(
          'card',
          {
            [`bg-${color}`]: color,
            [`text-${textColor}`]: textColor,
          },
          className,
        )}
        {...rest}
        ref={ref}
      >
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
