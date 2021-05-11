import React, {
  CSSProperties,
  ElementType,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'
import { useForkedRef } from '../../utils/hooks'

import { CButtonClose } from '../button/CButtonClose'
import { CToastBody } from './CToastBody'
import { CToastHeader } from './CToastHeader'

export interface CToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Auto hide the toast. [docs]
   *
   * @default true
   */
  autohide?: boolean
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   * @default 'primary'
   */
  color?: Colors
  /**
   * Delay hiding the toast (ms). [docs]
   */
  delay?: number
  /**
   * Optionally add a close button to component and allow it to self dismiss. [docs]
   *
   * @default true
   */
  dismissible?: boolean
  /**
   * Set component's icon. [docs]
   */
  icon?: string | ElementType
  /**
   * @ignore
   */
  key?: number
  /**
   * Time node for your component. [docs]
   */
  time?: string | ElementType
  /**
   * Title node for your component. [docs]
   */
  title?: string | ElementType
  /**
   * Toggle the visibility of component. [docs]
   *
   * @default true
   */
  visible?: boolean
  /**
   * Method called before the dissmiss animation has started. [docs]
   */
  onDismiss?: () => void
}

export const CToast = forwardRef<HTMLDivElement, CToastProps>(
  (
    {
      children,
      autohide = true,
      delay = 5000,
      dismissible = true,
      className,
      color,
      icon,
      key,
      time,
      title,
      visible = true,
      onDismiss,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState(visible)
    const [height, setHeight] = useState<number>()

    const toastRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, toastRef)
    const timeout = useRef<number>()

    //triggered on mount and destroy
    useEffect(() => () => clearTimeout(timeout.current), [])

    useEffect(() => {
      _autohide()
    }, [_visible])

    const _autohide = () => {
      if (autohide) {
        clearTimeout(timeout.current)
        timeout.current = window.setTimeout(() => {
          setVisible(false)
        }, delay)
      }
    }

    const duration = 150

    const defaultStyle: CSSProperties = {
      transition: `opacity ${duration}ms linear, height ${duration}ms linear`,
      opacity: 1,
    }

    const transitionStyles = {
      entering: { opacity: 0, height: 0 },
      entered: { opacity: 1, height: height },
      exiting: { opacity: 1, height: height },
      exited: { opacity: 0, height: 0 },
    }

    const onEntering = () => {
      toastRef && toastRef.current && setHeight(toastRef.current.scrollHeight)
    }

    const onEntered = () => {
      setHeight(0)
    }

    const onExit = () => {
      toastRef && toastRef.current && setHeight(toastRef.current.scrollHeight)
      onDismiss && onDismiss()
    }

    const onExiting = () => {
      // @ts-expect-error
      const reflow = toastRef && toastRef.current && toastRef.current.offsetHeight
      setHeight(0)
    }

    const onExited = () => {
      setHeight(0)
    }

    const _className = classNames(
      'toast fade',
      {
        show: _visible,
        [`bg-${color}`]: color,
      },
      className,
    )
    return (
      <Transition
        in={_visible}
        timeout={duration}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        unmountOnExit
      >
        {(state) => {
          const currentHeight = height === 0 ? null : { height }
          return (
            <div
              className={_className}
              aria-live="assertive"
              aria-atomic="true"
              role="alert"
              style={{ ...defaultStyle, ...transitionStyles[state], ...currentHeight }}
              onMouseEnter={() => clearTimeout(timeout.current)}
              onMouseLeave={() => _autohide}
              {...rest}
              key={key}
              ref={forkedRef}
            >
              {title && (
                <CToastHeader icon={icon} title={title} time={time}>
                  {dismissible && <CButtonClose onClick={() => setVisible(false)} />}
                </CToastHeader>
              )}
              <CToastBody>{children}</CToastBody>
              {!title && dismissible && <CButtonClose onClick={() => setVisible(false)} />}
            </div>
          )
        }}
      </Transition>
    )
  },
)

CToast.propTypes = {
  autohide: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  delay: PropTypes.number,
  dismissible: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  key: PropTypes.number,
  onDismiss: PropTypes.func,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  visible: PropTypes.bool,
}

CToast.displayName = 'CToast'
