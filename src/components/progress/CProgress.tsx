import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CProgressBar, CProgressBarProps } from './CProgressBar'

export interface CProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CProgressBarProps {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the height of the component. If you set that value the inner <CProgressBar> will automatically resize accordingly. [docs]
   *
   * @default 'undefined'
   */
  height?: number
  /**
   * TODO: [docs]
   */
  white?: boolean
}

export const CProgress = forwardRef<HTMLDivElement, CProgressProps>(
  ({ children, className, height, value, white, ...rest }, ref) => {
    const _className = classNames(
      'progress',
      {
        'progress-white': white,
      },
      className,
    )

    return (
      <div className={_className} style={height ? { height: `${height}px` } : {}} ref={ref}>
        {value ? (
          <CProgressBar value={value} {...rest}>
            {children}
          </CProgressBar>
        ) : (
          children
        )}
      </div>
    )
  },
)

CProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
  value: PropTypes.number,
  white: PropTypes.bool,
}

CProgress.displayName = 'CProgress'
