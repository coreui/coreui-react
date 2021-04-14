import React, { FC, HTMLAttributes, useCallback, useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { CModalBackdrop } from './CModalBackdrop'
import { CModalContent } from './CModalContent'
import { CModalDialog } from './CModalDialog'

export interface CModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Align the modal in the center or top of the screen. [docs]
   *
   * @default 'top'
   */
  alignment?: 'top' | 'center'
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  duration?: number
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window. [docs]
   */
  onDismiss?: () => void
  scrollable?: boolean
  /**
   * Size the component small, large, or extra large. [docs]
   */
  size?: 'sm' | 'lg' | 'xl'
  transition?: 'fade' | boolean
  /**
   * Toggle the visibility of alert component. [docs]
   */
  visible?: boolean
}

export const CModal: FC<CModalProps> = ({
  children,
  alignment,
  className,
  duration = 150,
  fullscreen,
  onDismiss,
  scrollable,
  size,
  transition = 'fade',
  visible,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [staticBackdrop, setStaticBackdrop] = useState(false)

  const handleDismiss = () => {
    if (typeof onDismiss === 'undefined') {
      return setStaticBackdrop(true)
    }
    return onDismiss && onDismiss()
  }

  useLayoutEffect(() => {
    setTimeout(() => setStaticBackdrop(false), duration)
  }, [staticBackdrop])

  const getTransitionClass = (state: string) => {
    return state === 'entering'
      ? 'd-block'
      : state === 'entered'
      ? 'show d-block'
      : state === 'exiting'
      ? 'd-block'
      : ''
  }
  const _className = classNames(
    'modal',
    {
      'modal-static': staticBackdrop,
    },
    transition,
    className,
  )

  // Set focus to modal after open
  useLayoutEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open')
      setTimeout(
        () => {
          ref.current && ref.current.focus()
        },
        !transition ? 0 : duration,
      )
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [visible])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        return handleDismiss()
      }
    },
    [ref, handleDismiss],
  )

  return (
    <div onClick={handleDismiss} onKeyDown={handleKeyDown}>
      {visible && <CModalBackdrop className="show" />}
      <Transition in={visible} timeout={!transition ? 0 : duration} onExit={onDismiss}>
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return (
            <div
              className={classNames(_className, transitionClass)}
              tabIndex={-1}
              role="dialog"
              ref={ref}
            >
              <CModalDialog
                alignment={alignment}
                fullscreen={fullscreen}
                scrollable={scrollable}
                size={size}
                onClick={(event) => event.stopPropagation()}
              >
                <CModalContent>{children}</CModalContent>
              </CModalDialog>
            </div>
          )
        }}
      </Transition>
    </div>
  )
}
