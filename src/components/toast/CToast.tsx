import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

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
   * @ignore
   */
  key?: number
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

interface ContextProps extends CToastProps {
  visible?: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const CToastContext = createContext({} as ContextProps)

export const CToast = forwardRef<HTMLDivElement, CToastProps>(
  (
    {
      children,
      autohide = true,
      className,
      color,
      delay = 5000,
      key,
      visible = true,
      onDismiss,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState(visible)
    const timeout = useRef<number>()

    const contextValues = {
      visible: _visible,
      setVisible,
    }

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

    const _className = classNames(
      'toast fade',
      {
        show: _visible,
        [`bg-${color}`]: color,
        'border-0': color,
      },
      className,
    )
    return (
      <CSSTransition in={_visible} timeout={250} onExit={onDismiss} unmountOnExit>
        <CToastContext.Provider value={contextValues}>
          <div
            className={_className}
            aria-live="assertive"
            aria-atomic="true"
            role="alert"
            onMouseEnter={() => clearTimeout(timeout.current)}
            onMouseLeave={() => _autohide}
            {...rest}
            key={key}
            ref={ref}
          >
            {children}
          </div>
        </CToastContext.Provider>
      </CSSTransition>
    )
  },
)

CToast.propTypes = {
  autohide: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  delay: PropTypes.number,
  key: PropTypes.number,
  onDismiss: PropTypes.func,
  visible: PropTypes.bool,
}

CToast.displayName = 'CToast'
