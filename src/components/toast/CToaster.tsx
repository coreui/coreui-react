import React, { forwardRef, HTMLAttributes, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { CToastProps, CToast } from './CToast'

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
  push?: CToastProps
}

export const CToaster = forwardRef<HTMLDivElement, CToasterProps>(
  //@ts-expect-error
  ({ children, className, placement, push, ...rest }, ref) => {
    const [toasts, setToasts] = useState<CToastProps[]>([])
    const index = useRef(0)

    useEffect(() => {
      push && addToast(push)
    }, [push])

    const addToast = (props: CToastProps) => {
      setToasts((state) => [...state, { key: index.current++, ...props }])
    }

    const _className = classNames(
      'toaster toast-container p-3',
      {
        // TODO: refactor those classes
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

    return (
      typeof window !== 'undefined' &&
      createPortal(
        toasts.length > 0 || children ? (
          <div className={_className} {...rest} ref={ref}>
            {children}
            {toasts.map((toastProps) => {
              return (
                <CToast
                  key={index.current++}
                  {...toastProps}
                  onDismiss={() =>
                    setToasts((state) => state.filter((i) => i.key !== toastProps.key))
                  }
                />
              )
            })}
          </div>
        ) : null,
        document.body,
      )
    )
  },
)

CToaster.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
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
  push: PropTypes.shape({
    ...CToast.propTypes,
  }),
}

CToaster.displayName = 'CToaster'
