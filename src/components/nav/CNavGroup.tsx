import React, { CSSProperties, forwardRef, ReactNode, useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { CNavContext } from '../sidebar/CSidebarNav'
export interface CNavGroupProps {
  children?: ReactNode
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Set component's icon. [docs]
   */
  icon?: string | ReactNode
  /**
   * TODO: . [docs]
   */
  toggler?: string
  /**
   * Show nav group items. [docs]
   */
  visible?: boolean
  /**
   * @ignore
   */
  idx?: string
}

export const CNavGroup = forwardRef<HTMLLIElement, CNavGroupProps>(
  ({ children, toggler, className, icon, idx, visible, ...rest }, ref) => {
    const [height, setHeight] = useState<number | string>()
    const navItemsRef = useRef<HTMLUListElement>(null)

    const style: CSSProperties = {
      height: 0,
    }

    const onEntering = () => {
      navItemsRef && navItemsRef.current && setHeight(navItemsRef.current.scrollHeight)
    }

    const onEntered = () => {
      setHeight('auto')
    }

    const onExit = () => {
      navItemsRef && navItemsRef.current && setHeight(navItemsRef.current.scrollHeight)
    }

    const onExiting = () => {
      // @ts-expect-error reflow is necessary to get correct height of the element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const reflow = navItemsRef && navItemsRef.current && navItemsRef.current.offsetHeight
      setHeight(0)
    }

    const onExited = () => {
      setHeight(0)
    }

    const transitionStyles = {
      entering: { display: 'block', height: height },
      entered: { display: 'block', height: height },
      exiting: { display: 'block', height: height },
      exited: { height: height },
    }

    const { visibleGroup, setVisibleGroup } = useContext(CNavContext)

    const _visible = Boolean(
      visible || (idx && visibleGroup && visibleGroup.toString().startsWith(idx.toString())),
    )

    const _className = classNames('nav-group', { show: _visible }, className)

    return (
      <li className={_className} {...rest} ref={ref}>
        {toggler && (
          <a
            className="nav-link nav-group-toggle"
            onClick={(event) => {
              event.preventDefault()
              setVisibleGroup(
                _visible
                  ? idx?.toString().includes('.')
                    ? idx.slice(0, idx.lastIndexOf('.'))
                    : ''
                  : idx,
              )
            }}
          >
            {icon && typeof icon === 'string' ? <i className={`nav-icon ${icon}`}></i> : icon}
            {toggler}
          </a>
        )}
        <Transition
          in={_visible}
          timeout={300}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          {(state) => (
            <ul
              className="nav-group-items"
              style={{ ...style, ...transitionStyles[state] }}
              ref={navItemsRef}
            >
              {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, { key: index, idx: `${idx}.${index}` })
                }
                return
              })}
            </ul>
          )}
        </Transition>
      </li>
    )
  },
)

CNavGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  idx: PropTypes.string,
  toggler: PropTypes.string,
  visible: PropTypes.bool,
}

CNavGroup.displayName = 'CNavGroup'
