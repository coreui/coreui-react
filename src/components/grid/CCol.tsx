import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export type BPObject = {
  span: 'auto' | number | boolean
  offset: number
  order: 'first' | 'last' | number
}

export interface CColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * The number of columns/offset/order on extra small devices (<576px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  xs?: 'auto' | number | boolean | BPObject
  /**
   * The number of columns/offset/order on small devices (<768px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  sm?: 'auto' | number | boolean | BPObject
  /**
   * The number of columns/offset/order on medium devices (<992px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  md?: 'auto' | number | boolean | BPObject
  /**
   * The number of columns/offset/order on large devices (<1200px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  lg?: 'auto' | number | boolean | BPObject
  /**
   * The number of columns/offset/order on X-Large devices (<1400px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  xl?: 'auto' | number | boolean | BPObject
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px). [docs]
   *
   * @type { 'auto' | number | boolean | { span: 'auto' | number | boolean } | { offset: number } | { order: 'first' | 'last' | number }}
   */
  xxl?: 'auto' | number | boolean | BPObject
}

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

export const CCol = forwardRef<HTMLDivElement, CColProps>(
  ({ children, className, ...rest }, ref) => {
    const repsonsiveCLassNames: Array<string> = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = rest[bp]
      delete rest[bp]

      const infix = bp === 'xs' ? '' : `-${bp}`

      // if (typeof breakpoint === 'string' && breakpoint === 'auto') {
      //   repsonsiveCLassNames.push(`col${infix}-auto`)
      // }

      if (typeof breakpoint === 'number' || typeof breakpoint === 'string') {
        repsonsiveCLassNames.push(`col${infix}-${breakpoint}`)
      }

      if (typeof breakpoint === 'boolean') {
        repsonsiveCLassNames.push(`col${infix}`)
      }

      if (typeof breakpoint === 'object') {
        // if (typeof breakpoint.span === 'string' && breakpoint.span === 'auto') {
        //   repsonsiveCLassNames.push(`col${infix}-auto`)
        // }

        if (typeof breakpoint.span === 'number' || typeof breakpoint.span === 'string') {
          repsonsiveCLassNames.push(`col${infix}-${breakpoint.span}`)
        }

        if (typeof breakpoint.span === 'boolean') {
          repsonsiveCLassNames.push(`col${infix}`)
        }

        if (typeof breakpoint.order === 'number' || typeof breakpoint.order === 'string') {
          repsonsiveCLassNames.push(`order${infix}-${breakpoint.order}`)
        }

        if (typeof breakpoint.offset === 'number') {
          repsonsiveCLassNames.push(`offset${infix}-${breakpoint.offset}`)
        }
      }
    })

    const _className = classNames(
      repsonsiveCLassNames.length ? repsonsiveCLassNames : 'col',
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CCol.displayName = 'CCol'
