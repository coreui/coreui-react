import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'
export interface CProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Use to animate the stripes right to left via CSS3 animations. [docs]
   *
   * @default false
   */
  animated?: boolean
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   * @default 'primary'
   */
  color?: Colors
  /**
   * The percent to progress the ProgressBar. [docs]
   *
   * @default 0
   */
  value?: number
  /**
   * Set the progress bar variant to optional striped. [docs]
   *
   * @default 'undefined'
   */
  variant?: 'striped'
}

export const CProgressBar = forwardRef<HTMLDivElement, CProgressBarProps>(
  ({ children, animated = false, className, color, value = 0, variant, ...rest }, ref) => {
    const _className = classNames(
      'progress-bar',
      {
        [`bg-${color}`]: color,
        [`progress-bar-${variant}`]: variant,
        'progress-bar-animated': animated,
      },
      className,
    )

    return (
      <div
        className={_className}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)
CProgressBar.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  value: PropTypes.number,
  variant: PropTypes.any,
}

CProgressBar.displayName = 'CProgressBar'
