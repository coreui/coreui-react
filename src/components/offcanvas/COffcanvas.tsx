import React, { forwardRef, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'

import { useForkedRef } from '../../utils/hooks'
import { CBackdrop } from '../backdrop/CBackdrop'

export interface COffcanvasProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Apply a backdrop on body while offcanvas is open. [docs]
   * @default true
   */
  backdrop?: boolean
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Closes the offcanvas when escape key is pressed [docs]
   * @default true
   */
  keyboard?: boolean
  /**
   * Method called before the dissmiss animation has started. [docs]
   */
  onDismiss?: () => void
  /**
   * Components placement, there’s no default placement. [docs]
   * @type 'start' | 'end' | 'top' | 'bottom'
   */
  placement: 'start' | 'end' | 'top' | 'bottom'
  /**
   * Toggle the visibility of offcanvas component. [docs]
   */
  portal?: boolean
  visible?: boolean
}

export const COffcanvas = forwardRef<HTMLDivElement, COffcanvasProps>(
  (
    {
      children,
      backdrop = true,
      className,
      keyboard = true,
      onDismiss,
      placement,
      portal = true,
      visible = false,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState<boolean>(visible)
    const offcanvasRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, offcanvasRef)

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    const _className = classNames(
      'offcanvas',
      {
        [`offcanvas-${placement}`]: placement,
        show: _visible,
      },
      className,
    )

    const transitionStyles = {
      entering: { visibility: 'visible' },
      entered: { visibility: 'visible' },
      exiting: { visibility: 'visible' },
      exited: { visibility: 'hidden' },
    }

    const handleDismiss = () => {
      setVisible(false)
      return onDismiss && onDismiss()
    }

    const handleKeyDown = useCallback(
      (event) => {
        if (event.key === 'Escape' && keyboard) {
          return handleDismiss()
        }
      },
      [ref, handleDismiss],
    )

    const offcanvas = (ref: React.Ref<HTMLDivElement>, state: string) => {
      return (
        <>
          <div
            className={_className}
            style={{ ...transitionStyles[state] }}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            {...rest}
            ref={ref}
          >
            {children}
          </div>
          {backdrop && <CBackdrop visible={_visible} onClick={handleDismiss} />}
        </>
      )
    }

    return (
      <Transition in={_visible} timeout={300} onEntered={() => offcanvasRef.current?.focus()}>
        {(state) => {
          return typeof window !== 'undefined' && portal
            ? createPortal(offcanvas(forkedRef, state), document.body)
            : offcanvas(forkedRef, state)
        }}
      </Transition>
    )
  },
)
