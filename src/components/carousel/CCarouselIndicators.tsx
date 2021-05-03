import React, { FC, HTMLAttributes, useContext, RefObject } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Context } from './CCarousel'

export interface CCarouselIndicatorsProps extends HTMLAttributes<HTMLOListElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Inner ref of main element. [docs]
   *
   * @type RefObject<HTMLOListElement> | {(): void}
   */
  innerRef?: RefObject<HTMLOListElement> | { (): void }
  /**
   * Indicators section user classes. [docs]
   *
   * @type string
   */
  indicatorsClass?: string
}

// CCarouselIndicators.defaultProps = {
//   indicatorsClass: 'carousel-indicators'
// }

export const CCarouselIndicators: FC<CCarouselIndicatorsProps> = ({
  className,
  innerRef,
  indicatorsClass = 'carousel-indicators',
}) => {
  const { itemNumber, state, setState, animating } = useContext(Context)

  //render

  const listClasses = classNames(indicatorsClass, className)

  const indicators = Array.from({ length: itemNumber }, (_, i) => i).map((key) => {
    return (
      <li
        key={`indicator${key}`}
        onClick={() => {
          !animating && key !== state[1] && setState([state[1], key])
        }}
        className={state[1] === key ? 'active' : ''}
      />
    )
  })

  return (
    <ol className={listClasses} ref={innerRef}>
      {indicators}
    </ol>
  )
}

CCarouselIndicators.propTypes = {
  className: PropTypes.string,
  indicatorsClass: PropTypes.string,
  innerRef: PropTypes.any, // TODO: check
}

CCarouselIndicators.displayName = 'CCarouselIndicators'
