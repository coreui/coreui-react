import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { CNavContext } from '../sidebar/CSidebarNav'
export interface CNavGroupProps {
  children?: ReactNode
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Make nav group more compact by cutting all `padding` in half.
   */
  compact?: boolean
  /**
   * Set group toggler label.
   */
  toggler?: string | ReactNode
  /**
   * Show nav group items.
   */
  visible?: boolean
  /**
   * @ignore
   */
  idx?: string
}

export const CNavGroup = forwardRef<HTMLLIElement, CNavGroupProps>(
  ({ children, className, compact, idx, toggler, visible, ...rest }, ref) => {
    const [height, setHeight] = useState<number | string>()
    const navItemsRef = useRef<HTMLUListElement>(null)

    const { visibleGroup, setVisibleGroup } = useContext(CNavContext)

    const [_visible, setVisible] = useState(
      Boolean(
        visible || (idx && visibleGroup && visibleGroup.toString().startsWith(idx.toString())),
      ),
    )

    useEffect(() => {
      setVisible(Boolean(idx && visibleGroup && visibleGroup.toString().startsWith(idx.toString())))
    }, [visibleGroup])

    const handleTogglerOnCLick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      setVisibleGroup(
        _visible ? (idx?.toString().includes('.') ? idx.slice(0, idx.lastIndexOf('.')) : '') : idx,
      )
      setVisible(!_visible)
    }

    const style: CSSProperties = {
      height: 0,
    }

    const onEntering = () => {
      navItemsRef.current && setHeight(navItemsRef.current.scrollHeight)
    }

    const onEntered = () => {
      setHeight('auto')
    }

    const onExit = () => {
      navItemsRef.current && setHeight(navItemsRef.current.scrollHeight)
    }

    const onExiting = () => {
      // @ts-expect-error reflow is necessary to get correct height of the element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const reflow = navItemsRef.current?.offsetHeight
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

    return (
      <li className={classNames('nav-group', { show: _visible }, className)} {...rest} ref={ref}>
        {toggler && (
          <a className="nav-link nav-group-toggle" onClick={(event) => handleTogglerOnCLick(event)}>
            {toggler}
          </a>
        )}
        <Transition
          in={_visible}
          nodeRef={navItemsRef}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
          timeout={300}
        >
          {(state) => (
            <ul
              className={classNames('nav-group-items', {
                compact: compact,
              })}
              style={{ ...style, ...transitionStyles[state] }}
              ref={navItemsRef}
            >
              {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child as React.ReactElement<any>, {
                    key: index,
                    idx: `${idx}.${index}`,
                  })
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
  compact: PropTypes.bool,
  idx: PropTypes.string,
  toggler: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  visible: PropTypes.bool,
}

CNavGroup.displayName = 'CNavGroup'
