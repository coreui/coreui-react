import React, { FC, HTMLAttributes, RefObject, useContext } from 'react'
import classNames from 'classnames'
import { Context } from './CCarousel'

export interface CCarouselControlProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string

  /**
   *  Inner ref of main element. [docs]
   *
   * @type RefObject<HTMLDivElement> | {(): void}
   */
  innerRef?: RefObject<HTMLAnchorElement> | { (): void }

  /**
   *  Direction. [docs]
   *
   * @type 'prev' | 'next'
   */
  direction: 'prev' | 'next'
}

export const CCarouselControl: FC<CCarouselControlProps> = ({
  className,
  innerRef,
  children,
  direction,
  ...rest
}) => {
  const { state, setState, itemNumber, animating } = useContext(Context)

  const onClick = (): void => {
    if (animating) {
      return
    }
    let newIdx
    if (direction === 'next') {
      newIdx = itemNumber === state[1] + 1 ? 0 : state[1] + 1
    } else {
      newIdx = state[1] === 0 ? itemNumber - 1 : state[1] - 1
    }
    setState([state[1], newIdx, direction])
  }

  //render

  const anchorClasses = classNames(`carousel-control-${direction}`, className)

  return (
    <a className={anchorClasses} {...rest} onClick={onClick} ref={innerRef}>
      {children || <span className={`carousel-control-${direction}-icon`} aria-label={direction} />}
    </a>
  )
}
