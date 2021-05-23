import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CCarouselContext } from './CCarousel'

export interface CCarouselIndicatorsProps extends HTMLAttributes<HTMLOListElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Indicators section user classes. [docs]
   */
  indicatorsClass?: string
}

export const CCarouselIndicators = forwardRef<HTMLOListElement, CCarouselIndicatorsProps>(
  ({ className, indicatorsClass = 'carousel-indicators' }, ref) => {
    const { itemsNumber, state, setState, animating } = useContext(CCarouselContext)

    const listClasses = classNames(indicatorsClass, className)

    const indicators = Array.from({ length: itemsNumber }, (_, i) => i).map((key) => {
      return (
        <li
          key={`indicator${key}`}
          onClick={() => {
            !animating && key !== state[1] && setState([state[1], key])
          }}
          className={state[1] === key ? 'active' : ''}
          data-coreui-target=""
        />
      )
    })

    return (
      <ol className={listClasses} ref={ref}>
        {indicators}
      </ol>
    )
  },
)

CCarouselIndicators.propTypes = {
  className: PropTypes.string,
  indicatorsClass: PropTypes.string,
}

CCarouselIndicators.displayName = 'CCarouselIndicators'
