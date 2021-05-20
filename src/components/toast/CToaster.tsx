import React, { forwardRef, HTMLAttributes, useEffect, useState, useRef, ReactElement } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
export interface CToasterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Describes the placement of your component. [docs]
   *
   * @type 'top-start' | 'top' | 'top-end' | 'middle-start' | 'middle' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-end' |
   * @default 'top-end'
   */
  placement?:
    | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'middle-start'
    | 'middle-center'
    | 'middle-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end'
    | string
  /**
   * TODO:. [docs]
   */
  push?: ReactElement
}

export const CToaster = forwardRef<HTMLDivElement, CToasterProps>(
  ({ children, className, placement, push, ...rest }, ref) => {
    const [toasts, setToasts] = useState<ReactElement[]>([])
    const index = useRef<number>(0)

    useEffect(() => {
      index.current++
      push && addToast(push)
    }, [push])

    // TODO: remove invisible items
    const addToast = (push: ReactElement) => {
      setToasts((state) => [
        ...state,
        React.cloneElement(push, {
          key: index.current,
          onDismiss: () => setToasts((state) => state.filter((i) => i.key !== index.current)),
        }),
      ])
    }

    const _className = classNames(
      'toaster toast-container p-3',
      {
        'position-fixed': placement,
        'top-0': placement && placement.includes('top'),
        'top-50 translate-middle-y': placement && placement.includes('middle'),
        'bottom-0': placement && placement.includes('bottom'),
        'start-0': placement && placement.includes('start'),
        'start-50 translate-middle-x': placement && placement.includes('center'),
        'end-0': placement && placement.includes('end'),
      },
      className,
    )

    const toaster = (ref?: React.Ref<HTMLDivElement>) => {
      return toasts.length > 0 || children ? (
        <div className={_className} {...rest} ref={ref}>
          {children}
          {toasts.map((toast) => toast)}
        </div>
      ) : null
    }

    return typeof window !== 'undefined' && placement
      ? createPortal(toaster(ref), document.body)
      : toaster(ref)
  },
)

CToaster.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      'top-start',
      'top-center',
      'top-end',
      'middle-start',
      'middle-center',
      'middle-end',
      'bottom-start',
      'bottom-center',
      'bottom-end',
    ]),
  ]),
  push: PropTypes.any,
}

CToaster.displayName = 'CToaster'
