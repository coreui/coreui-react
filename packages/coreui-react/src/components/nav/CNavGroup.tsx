import React, {
  CSSProperties,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import type { TransitionStatus } from 'react-transition-group'

import { PolymorphicRefForwardingComponent } from '../../helpers'

import { CNavGroupContext } from './CNavGroupContext'
import { CSidebarNavContext } from '../sidebar/CSidebarNavContext'
export interface CNavGroupProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   *
   * @since 5.0.0
   */
  as?: ElementType
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Make nav group more compact by cutting all `padding` in half.
   */
  compact?: boolean
  /**
   * Callback fired when the user toggles the group. Receives the requested visibility. Provide
   * it together with `visible` for controlled mode—update `visible` from here, or ignore the
   * change to keep the group as is.
   *
   * @since 5.12.0
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * Set group toggler label.
   */
  toggler?: string | ReactNode | (({ visible }: { visible: boolean }) => ReactNode)
  /**
   * Show nav group items. Acts as the initial state when used on its own, or as the controlled
   * value when paired with `onVisibleChange`.
   */
  visible?: boolean
}

const isPrefix = (chain: string[], other: string[]) =>
  chain.every((id, index) => other[index] === id)

export const CNavGroup: PolymorphicRefForwardingComponent<'li', CNavGroupProps> = forwardRef<
  HTMLDivElement | HTMLLIElement,
  CNavGroupProps
>(
  (
    {
      children,
      as: Component = 'li',
      className,
      compact,
      onVisibleChange,
      toggler,
      visible,
      ...rest
    },
    ref
  ) => {
    const id = useId()
    const parentChain = useContext(CNavGroupContext)
    const chain = useMemo(() => [...parentChain, id], [parentChain, id])

    const navContext = useContext(CSidebarNavContext)
    const setOpenChain = navContext?.setOpenChain

    const [height, setHeight] = useState<number | string>(0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navItemsRef = useRef<any>(null)

    const [uncontrolledVisible, setUncontrolledVisible] = useState(Boolean(visible))

    const controlled = visible !== undefined && onVisibleChange !== undefined

    const _visible = controlled
      ? Boolean(visible)
      : navContext
        ? chain.length > 0 && isPrefix(chain, navContext.openChain)
        : uncontrolledVisible

    // Sync the accordion with the `visible` prop: seeds default-open groups and follows later
    // changes (and keeps controlled groups in sync). `setOpenChain` is stable, so this does not
    // re-run on unrelated accordion updates—letting a default-open group be collapsed manually.
    useEffect(() => {
      if (!setOpenChain || visible === undefined) {
        return
      }

      if (visible) {
        setOpenChain((prev) => (chain.length > prev.length && isPrefix(prev, chain) ? chain : prev))
      } else {
        setOpenChain((prev) => (isPrefix(chain, prev) ? parentChain : prev))
      }
    }, [visible, setOpenChain, chain, parentChain])

    // Standalone (no sidebar): mirror the `visible` prop into local state.
    useEffect(() => {
      if (navContext || visible === undefined) {
        return
      }

      setUncontrolledVisible(visible)
    }, [visible, navContext])

    // Accordion: when another branch opens, a controlled group must close too. As its
    // visibility is owned by the parent, request the change through `onVisibleChange`.
    useEffect(() => {
      if (!controlled || !navContext || !visible) {
        return
      }

      const openHere = chain.length > 0 && isPrefix(chain, navContext.openChain)
      if (!openHere && navContext.openChain.length > 0) {
        onVisibleChange?.(false)
      }
    }, [controlled, navContext, visible, chain, onVisibleChange])

    const handleTogglerOnClick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      const next = !_visible

      if (!controlled) {
        if (setOpenChain) {
          setOpenChain(next ? chain : parentChain)
        } else {
          setUncontrolledVisible(next)
        }
      }

      onVisibleChange?.(next)
    }

    const style: CSSProperties = {
      height: 0,
    }

    const onEntering = () => {
      if (navItemsRef.current) {
        setHeight(navItemsRef.current.scrollHeight)
      }
    }

    const onEntered = () => {
      setHeight('auto')
    }

    const onExit = () => {
      if (navItemsRef.current) {
        setHeight(navItemsRef.current.scrollHeight)
      }
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
      unmounted: {},
    }

    const NavGroupItemsComponent = Component === 'li' ? 'ul' : 'div'
    const togglerContent = typeof toggler === 'function' ? toggler({ visible: _visible }) : toggler

    return (
      <CNavGroupContext.Provider value={chain}>
        <Component
          className={classNames('nav-group', { show: _visible }, className)}
          {...rest}
          ref={ref}
        >
          {toggler && (
            <a
              aria-expanded={_visible}
              className="nav-link nav-group-toggle"
              href="#"
              onClick={handleTogglerOnClick}
            >
              {togglerContent}
            </a>
          )}
          <Transition
            appear
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
              <NavGroupItemsComponent
                className={classNames('nav-group-items', {
                  compact: compact,
                })}
                style={{
                  ...style,
                  ...transitionStyles[state as TransitionStatus],
                }}
                ref={navItemsRef}
              >
                {children}
              </NavGroupItemsComponent>
            )}
          </Transition>
        </Component>
      </CNavGroupContext.Provider>
    )
  }
)

CNavGroup.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  toggler: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  visible: PropTypes.bool,
}

CNavGroup.displayName = 'CNavGroup'
