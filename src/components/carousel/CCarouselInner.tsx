import React, { Children, forwardRef, HTMLAttributes, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CCarouselContext } from './CCarousel'

export interface CCarouselInnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CCarouselInner = forwardRef<HTMLDivElement, CCarouselInnerProps>(
  ({ children, className, ...rest }, ref) => {
    const { setItemsNumber } = useContext(CCarouselContext)
    const _className = classNames('carousel-inner', className)

    useEffect(() => {
      setItemsNumber(Children.toArray(children).length)
    })

    return (
      <div className={_className} {...rest} ref={ref}>
        {Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { key: index, idx: index })
          }
          return
        })}
      </div>
    )
  },
)

CCarouselInner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CCarouselInner.displayName = 'CCarouselInner'
