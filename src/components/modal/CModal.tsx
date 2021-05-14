import React, { FC, HTMLAttributes, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

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
  /**
   * @ignore
   */
  // TODO: check if it possible to remove this property
  duration?: number
  /**
   * Set modal to covers the entire user viewport. [docs]
   */
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * TODO: Does the modal dialog itself scroll, or does the whole dialog scroll within the window. [docs]
   */
  onDismiss?: () => void
  /**
   * Create a scrollable modal that allows scrolling the modal body. [docs]
   */
  scrollable?: boolean
  /**
   * Size the component small, large, or extra large. [docs]
   */
  size?: 'sm' | 'lg' | 'xl'
  /**
   * Remove animation to create modal that simply appear rather than fade in to view. [docs]
   */
  transition?: boolean
  /**
   * Toggle the visibility of modal component. [docs]
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
  transition = true,
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
      fade: transition,
    },
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

  const modal = (ref?: React.Ref<HTMLDivElement>, transitionClass?: string) => {
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
  }

  return (
    <div onClick={handleDismiss} onKeyDown={handleKeyDown}>
      {visible && <CModalBackdrop className="show" />}
      <CSSTransition
        in={visible}
        timeout={!transition ? 0 : duration}
        onExit={onDismiss}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return typeof window
            ? 'undefined' && createPortal(modal(ref, transitionClass), document.body)
            : modal(ref, transitionClass)
        }}
      </CSSTransition>
    </div>
  )
}

CModal.propTypes = {
  alignment: PropTypes.oneOf(['top', 'center']),
  children: PropTypes.node,
  className: PropTypes.string,
  duration: PropTypes.number,
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  onDismiss: PropTypes.func,
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  transition: PropTypes.bool,
  visible: PropTypes.bool,
}

CModal.displayName = 'CModal'
