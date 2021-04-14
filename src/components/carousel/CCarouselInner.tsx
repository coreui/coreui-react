import React, { FC, HTMLAttributes, RefObject } from 'react'
import classNames from 'classnames'

export interface CCarouselInnerProps extends HTMLAttributes<HTMLDivElement> {
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

export const CCarouselInner: FC<CCarouselInnerProps> = ({ className, innerRef, ...rest }) => {
  //render

  const classes = classNames('carousel-inner', className)

  return <div className={classes} {...rest} ref={innerRef} />
}
