import React, { ElementType, forwardRef, ImgHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCardImageProps
  extends ImgHTMLAttributes<HTMLImageElement | HTMLOrSVGElement | HTMLOrSVGImageElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
   */
  orientation?: 'top' | 'bottom'
}

export const CCardImage = forwardRef<
  HTMLImageElement | HTMLOrSVGElement | HTMLOrSVGImageElement,
  CCardImageProps
>(({ children, className, component: Component = 'img', orientation, ...rest }, ref) => {
  return (
    <Component
      className={classNames(orientation ? `card-img-${orientation}` : 'card-img', className)}
      {...rest}
      ref={ref}
    >
      {children}
    </Component>
  )
})

CCardImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  orientation: PropTypes.oneOf(['top', 'bottom']),
}

CCardImage.displayName = 'CCardImage'
