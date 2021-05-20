import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CCarouselContext } from './CCarousel'

type Direction = 'prev' | 'next'

export interface CCarouselControlProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   *  Direction. [docs]
   *
   * @type 'prev' | 'next'
   */
  direction: Direction
}

export const CCarouselControl = forwardRef<HTMLButtonElement, CCarouselControlProps>(
  ({ className, children, direction, ...rest }, ref) => {
    const { state, setState, itemsNumber, animating } = useContext(CCarouselContext)

    const onClick = (): void => {
      if (animating) {
        return
      }
      let newIdx
      if (direction === 'next') {
        newIdx = itemsNumber === state[1] + 1 ? 0 : state[1] + 1
      } else {
        newIdx = state[1] === 0 ? itemsNumber - 1 : state[1] - 1
      }
      setState([state[1], newIdx, direction])
    }

    const anchorClasses = classNames(`carousel-control-${direction}`, className)

    return (
      <button className={anchorClasses} {...rest} onClick={onClick} ref={ref}>
        {children || (
          <span className={`carousel-control-${direction}-icon`} aria-label={direction} />
        )}
      </button>
    )
  },
)

CCarouselControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf<Direction>(['prev', 'next']).isRequired,
}

CCarouselControl.displayName = 'CCarouselControl'
