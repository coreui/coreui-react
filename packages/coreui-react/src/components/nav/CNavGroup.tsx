import React, {
  CSSProperties,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useCallback,
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

import { CNavGroupContext, CNavGroupContextValue } from './CNavGroupContext'
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

    // Accordion of the parent level: lets this group read whether it is the open one and request
    // its own open/close. `null` when rendered outside a `CSidebarNav`.
    const parentContext = useContext(CNavGroupContext)
    const parentContextRef = useRef(parentContext)
    parentContextRef.current = parentContext

    const [height, setHeight] = useState<number | string>(0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navItemsRef = useRef<any>(null)

    const [uncontrolledVisible, setUncontrolledVisible] = useState(Boolean(visible))
    // This group's own accordion state for its children. It survives the group being collapsed,
    // so reopening the group restores whichever child was previously open.
    const [activeChildId, setActiveChildId] = useState<string | undefined>()

    const controlled = visible !== undefined && onVisibleChange !== undefined

    const _visible = controlled
      ? Boolean(visible)
      : parentContext
        ? parentContext.activeId === id
        : uncontrolledVisible

    // Sync the accordion with the `visible` prop: seeds default-open groups and follows later
    // changes (and keeps controlled groups in sync). Watching only `visible` keeps this from
    // re-running on unrelated accordion updates—so a default-open group can be collapsed manually.
    useEffect(() => {
      if (visible === undefined) {
        return
      }

      const parentSetActiveId = parentContextRef.current?.setActiveId
      if (parentSetActiveId) {
        if (visible) {
          parentSetActiveId(id)
        } else {
          parentSetActiveId((prev) => (prev === id ? undefined : prev))
        }
      } else {
        setUncontrolledVisible(visible)
      }
    }, [visible, id])

    // Accordion: when another branch opens, a controlled group must close too. As its visibility
    // is owned by the parent, request the change through `onVisibleChange`.
    useEffect(() => {
      if (!controlled || !visible) {
        return
      }

      const activeId = parentContext?.activeId
      if (activeId !== undefined && activeId !== id) {
        onVisibleChange?.(false)
      }
    }, [controlled, visible, parentContext?.activeId, id, onVisibleChange])

    // Open this group within its parent level and cascade up to the root, revealing the whole
    // branch. Used by an active nav link and by nested groups to bubble the request upwards.
    const openBranch = useCallback(() => {
      const parent = parentContextRef.current
      if (!parent) {
        return
      }

      parent.setActiveId(id)
      parent.openBranch()
    }, [id])

    const childContextValue = useMemo<CNavGroupContextValue>(
      () => ({ activeId: activeChildId, setActiveId: setActiveChildId, openBranch }),
      [activeChildId, openBranch]
    )

    const handleTogglerOnClick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      const next = !_visible

      if (!controlled) {
        if (parentContext) {
          parentContext.setActiveId(next ? id : undefined)
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

      const _reflow = navItemsRef.current?.offsetHeight
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
      <CNavGroupContext.Provider value={childContextValue}>
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
