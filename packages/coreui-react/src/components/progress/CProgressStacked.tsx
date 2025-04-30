import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CProgressStackedContext } from './CProgressStackedContext'

export interface CProgressStackedProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const CProgressStacked = forwardRef<HTMLDivElement, CProgressStackedProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={classNames('progress-stacked', className)} ref={ref} {...rest}>
        <CProgressStackedContext.Provider
          value={{
            stacked: true,
          }}
        >
          {children}
        </CProgressStackedContext.Provider>
      </div>
    )
  }
)

CProgressStacked.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CProgressStacked.displayName = 'CProgressStacked'
