import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { colorPropType } from '../../props'
import type { Colors } from '../../types'

export interface CSpinnerProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
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
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Size the component small.
   */
  size?: 'sm'
  /**
   * Set the button variant to an outlined button or a ghost button.
   */
  variant?: 'border' | 'grow'
  /**
   * Set visually hidden label for accessibility purposes.
   */
  visuallyHiddenLabel?: string
}

export const CSpinner = forwardRef<HTMLDivElement | HTMLSpanElement, CSpinnerProps>(
  (
    {
      className,
      color,
      component: Component = 'div',
      size,
      variant = 'border',
      visuallyHiddenLabel = 'Loading...',
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        className={classNames(
          `spinner-${variant}`,
          `text-${color}`,
          size && `spinner-${variant}-${size}`,
          className,
        )}
        role="status"
        {...rest}
        ref={ref}
      >
        <span className="visually-hidden">{visuallyHiddenLabel}</span>
      </Component>
    )
  },
)

CSpinner.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  size: PropTypes.oneOf(['sm']),
  variant: PropTypes.oneOf(['border', 'grow']),
  visuallyHiddenLabel: PropTypes.string,
}

CSpinner.displayName = 'CSpinner'
