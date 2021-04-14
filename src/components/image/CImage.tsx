// TODO: add documentation

import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CImage extends HTMLAttributes<HTMLImageElement> {
  align?: 'start' | 'center' | 'end'
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  fluid?: boolean
  rounded?: boolean
  thumbnail?: boolean
}

export const CImage = forwardRef<HTMLImageElement, CImage>(
  ({ align, className, fluid, rounded, thumbnail, ...rest }, ref) => {
    const _className = classNames(
      {
        [`float-${align}`]: align && (align === 'start' || align === 'end'),
        'd-block mx-auto': align && align === 'center',
        'img-fluid': fluid,
        rounded: rounded,
        'img-thumbnail': thumbnail,
      },
      className,
    )
    return <img className={_className} {...rest} ref={ref} />
  },
)
