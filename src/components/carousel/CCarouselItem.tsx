import React, { forwardRef, HTMLAttributes, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { CCarouselContext } from './CCarousel'
export interface CCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * @ignore
   */
  idx?: number
}

// eslint-disable-next-line @typescript-eslint/ban-types
const getDirection = (state: object) => {
  if (state[2]) {
    return state[2] === 'next' ? 'right' : 'left'
  } else {
    return state[1] > state[0] ? 'right' : 'left'
  }
}

export const CCarouselItem = forwardRef<HTMLDivElement, CCarouselItemProps>(
  ({ children, className, idx, ...rest }, ref) => {
    const { animate, state, animating, setAnimating } = useContext(CCarouselContext)

    const [isIn, setIsIn] = useState<boolean>(false)

    const onEnter = () => {
      setAnimating(false)
    }
    const onEntering = () => {
      setAnimating(true)
    }
    const onExit = () => {
      setAnimating(false)
    }
    const onExiting = () => {
      setAnimating(true)
    }
    const onExited = () => {
      setAnimating(false)
    }

    useEffect(() => {
      setIsIn(state[1] === idx)
    }, [state])

    if (!animate || state[0] === null) {
      const itemClasses = classNames('carousel-item', isIn && 'active', className)
      return (
        <div className={itemClasses} ref={ref} {...rest}>
          {children}
        </div>
      )
    }

    return (
      <CSSTransition
        timeout={600}
        in={isIn}
        onEnter={onEnter}
        onEntering={onEntering}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        nodeRef={ref}
      >
        {(status) => {
          const direction = getDirection(state)
          const isActive = status === 'entered' || status === 'exiting'
          const directionClassName =
            (status === 'entering' || status === 'exiting') &&
            animating &&
            (direction === 'right' ? 'carousel-item-start' : 'carousel-item-end')

          const orderClassName =
            status === 'entering' &&
            (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev')

          const itemClasses = classNames(
            'carousel-item',
            isActive && 'active',
            orderClassName,
            directionClassName,
            className,
          )

          return (
            <div className={itemClasses} ref={ref} {...rest}>
              {children}
            </div>
          )
        }}
      </CSSTransition>
    )
  },
)

CCarouselItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  idx: PropTypes.number,
}

CCarouselItem.displayName = 'CCarouselItem'
