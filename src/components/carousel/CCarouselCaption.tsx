import React, { FC, HTMLAttributes, RefObject } from 'react'
import classNames from 'classnames'

export interface CCarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string

  /**
   * Inner ref of main element. [docs]
   *
   * @type RefObject<HTMLDivElement> | {(): void}
   */
  innerRef?: RefObject<HTMLDivElement> | { (): void }
}

export const CCarouselCaption: FC<CCarouselCaptionProps> = ({ className, innerRef, ...rest }) => {
  //render

  const classes = classNames('carousel-caption', className)

  return <div className={classes} {...rest} ref={innerRef} />
}
