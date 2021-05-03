import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CCardBody = forwardRef<HTMLDivElement, CCardBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-body', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CCardBody.displayName = 'CCardBody'

// npx babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd