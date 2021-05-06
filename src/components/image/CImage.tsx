// TODO: add documentation

import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CImage extends HTMLAttributes<HTMLImageElement> {
  align?: 'start' | 'center' | 'end'
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Make image responsive. [docs]
   */
  fluid?: boolean
  /**
   * Make image rounded. [docs]
   */
  rounded?: boolean
  /**
   * Give an image a rounded 1px border appearance. [docs]
   */
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

CImage.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.string,
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  thumbnail: PropTypes.bool,
}

CImage.displayName = 'CImage'
