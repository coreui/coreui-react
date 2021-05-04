import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CContainerProps extends HTMLAttributes<HTMLDivElement> {
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Set container 100% wide until small breakpoint. [docs]
   */
  sm?: boolean
  /**
   * Set container 100% wide until medium breakpoint. [docs]
   */
  md?: boolean
  /**
   * Set container 100% wide until large breakpoint. [docs]
   */
  lg?: boolean
  /**
   * Set container 100% wide until X-large breakpoint. [docs]
   */
  xl?: boolean
  /**
   * Set container 100% wide until XX-large breakpoint. [docs]
   */
  xxl?: boolean
  /**
   * Set container 100% wide, spanning the entire width of the viewport. [docs]
   */
  fluid?: boolean
}

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'fluid' as const,
]

export const CContainer = forwardRef<HTMLDivElement, CContainerProps>(
  ({ children, className, ...rest }, ref) => {
    const repsonsiveCLassNames: Array<string> = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = rest[bp]
      delete rest[bp]

      breakpoint && repsonsiveCLassNames.push(`container-${bp}`)
    })

    const _className = classNames(
      repsonsiveCLassNames.length ? repsonsiveCLassNames : 'container',
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  fluid: PropTypes.bool,
}

CContainer.displayName = 'CContainer'
