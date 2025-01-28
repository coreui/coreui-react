import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import type { Options } from '@popperjs/core'

import { PolymorphicRefForwardingComponent } from '../../helpers'
import { useForkedRef, usePopper } from '../../hooks'
import { placementPropType } from '../../props'
import type { Placements } from '../../types'
import { getNextActiveElement, isRTL } from '../../utils'

import type { Alignments, Directions } from './types'
import { getPlacement } from './utils'

export interface CDropdownProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  /**
   * Specifies the alignment of the React Dropdown Menu within this React Dropdown.
   *
   * @example
   * // Align dropdown menu to the end on large devices, otherwise start
   * <CDropdown alignment={{ lg: 'end', xs: 'start' }}>
   *   <CDropdownToggle>Toggle dropdown</CDropdownToggle>
   *   <CDropdownMenu>
   *     <CDropdownItem>Action</CDropdownItem>
   *     <CDropdownItem>Another Action</CDropdownItem>
   *   </CDropdownMenu>
   * </CDropdown>
   *
   * @type 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}
   */
  alignment?: Alignments

  /**
   * Determines the root node component (native HTML element or a custom React component) for the React Dropdown.
   */
  as?: ElementType

  /**
   * Configures automatic closing behavior for the React Dropdown:
   * - `true` - Close on clicks inside or outside of the React Dropdown Menu.
   * - `false` - Disable auto-close; manually call `hide` or `toggle` (also not closed by `Escape`).
   * - `'inside'` - Close only when clicking inside the React Dropdown Menu.
   * - `'outside'` - Close only when clicking outside the React Dropdown Menu.
   *
   * @example
   * // Close only when user clicks outside of the menu
   * <CDropdown autoClose="outside" />
   */
  autoClose?: 'inside' | 'outside' | boolean

  /**
   * Adds custom classes to the React Dropdown root element.
   */
  className?: string

  /**
   * Appends the React Dropdown Menu to a specific element. You can pass an HTML element or a function returning an element. Defaults to `document.body`.
   *
   * @example
   * // Append the menu to a custom container
   * const myContainer = document.getElementById('my-container')
   *
   * <CDropdown container={myContainer} />
   *
   * @since 4.11.0
   */
  container?: DocumentFragment | Element | (() => DocumentFragment | Element | null) | null

  /**
   * Applies a darker color scheme to the React Dropdown Menu, often used within dark navbars.
   */
  dark?: boolean

  /**
   * Specifies the direction of the React Dropdown.
   */
  direction?: 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart'

  /**
   * Defines x and y offsets ([x, y]) for the React Dropdown Menu relative to its target.
   *
   * @example
   * // Offset the menu 10px in X and 5px in Y direction
   * <CDropdown offset={[10, 5]}>
   *   ...
   * </CDropdown>
   */
  offset?: [number, number]

  /**
   * Callback fired right before the React Dropdown becomes hidden.
   *
   * @since 4.9.0
   */
  onHide?: () => void

  /**
   * Callback fired immediately after the React Dropdown is displayed.
   */
  onShow?: () => void

  /**
   * Determines the placement of the React Dropdown Menu after Popper.js modifiers.
   *
   * @type 'auto' | 'auto-start' | 'auto-end' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
   */
  placement?: Placements

  /**
   * Enables or disables dynamic positioning via Popper.js for the React Dropdown Menu.
   */
  popper?: boolean

  /**
   * Provides a custom Popper.js configuration or a function that returns a modified Popper.js configuration for advanced positioning of the React Dropdown Menu. [Read more](https://popper.js.org/docs/v2/constructors/#options)
   *
   * @example
   * // Providing a custom popper config
   * <CDropdown
   *   popperConfig={{
   *     modifiers: [
   *       {
   *         name: 'flip',
   *         options: { fallbackPlacements: ['bottom', 'top'] },
   *       },
   *     ],
   *   }}
   * >...</CDropdown>
   *
   * @since 5.5.0
   */
  popperConfig?: Partial<Options> | ((defaultPopperConfig: Partial<Options>) => Partial<Options>)

  /**
   * Renders the React Dropdown Menu using a React Portal, allowing it to escape the DOM hierarchy for improved positioning.
   *
   * @since 4.8.0
   */
  portal?: boolean

  /**
   * Defines the visual variant of the React Dropdown
   */
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'

  /**
   * Controls the visibility of the React Dropdown Menu:
   * - `true` - Visible
   * - `false` - Hidden
   *
   * @example
   * // Programmatically manage the dropdown visibility
   * const [visible, setVisible] = useState(false)
   *
   * <CDropdown visible={visible}>
   *   ...
   * </CDropdown>
   *
   */
  visible?: boolean
}

interface ContextProps extends CDropdownProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdownToggleRef: RefObject<any | undefined>
  dropdownMenuRef: RefObject<HTMLDivElement | HTMLUListElement | undefined>
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
  portal: boolean
}

export const CDropdownContext = createContext({} as ContextProps)

export const CDropdown: PolymorphicRefForwardingComponent<'div', CDropdownProps> = forwardRef<
  HTMLDivElement | HTMLLIElement,
  CDropdownProps
>(
  (
    {
      children,
      alignment,
      as = 'div',
      autoClose = true,
      className,
      container,
      dark,
      direction,
      offset = [0, 2],
      onHide,
      onShow,
      placement = 'bottom-start',
      popper = true,
      popperConfig,
      portal = false,
      variant = 'btn-group',
      visible = false,
      ...rest
    },
    ref
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dropdownToggleRef = useRef<any>(null)
    const dropdownMenuRef = useRef<HTMLDivElement | HTMLUListElement>(null)
    const forkedRef = useForkedRef(ref, dropdownRef)
    const [_visible, setVisible] = useState(visible)
    const { initPopper, destroyPopper } = usePopper()

    const Component = variant === 'nav-item' ? 'li' : as

    // Disable popper if responsive aligment is set.
    if (typeof alignment === 'object') {
      popper = false
    }

    const contextValues = {
      alignment,
      container,
      dark,
      dropdownToggleRef,
      dropdownMenuRef,
      popper,
      portal,
      variant,
      visible: _visible,
      setVisible,
    }

    const defaultPopperConfig = {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
      ],
      placement: getPlacement(placement, direction, alignment, isRTL(dropdownMenuRef.current)),
    }

    const computedPopperConfig: Partial<Options> = {
      ...defaultPopperConfig,
      ...(typeof popperConfig === 'function' ? popperConfig(defaultPopperConfig) : popperConfig),
    }

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    useEffect(() => {
      if (_visible && dropdownToggleRef.current && dropdownMenuRef.current) {
        dropdownToggleRef.current.focus()
        popper &&
          initPopper(dropdownToggleRef.current, dropdownMenuRef.current, computedPopperConfig)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('keyup', handleKeyup)
        dropdownToggleRef.current.addEventListener('keydown', handleKeydown)
        dropdownMenuRef.current.addEventListener('keydown', handleKeydown)
        onShow && onShow()
      }

      return () => {
        popper && destroyPopper()
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('keyup', handleKeyup)
        dropdownToggleRef.current &&
          dropdownToggleRef.current.removeEventListener('keydown', handleKeydown)
        dropdownMenuRef.current &&
          dropdownMenuRef.current.removeEventListener('keydown', handleKeydown)
        onHide && onHide()
      }
    }, [_visible])

    const handleKeydown = (event: KeyboardEvent) => {
      if (
        _visible &&
        dropdownMenuRef.current &&
        (event.key === 'ArrowDown' || event.key === 'ArrowUp')
      ) {
        event.preventDefault()
        const target = event.target as HTMLElement
        const items: HTMLElement[] = Array.from(
          dropdownMenuRef.current.querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)')
        )
        getNextActiveElement(items, target, event.key === 'ArrowDown', true).focus()
      }
    }

    const handleKeyup = (event: KeyboardEvent) => {
      if (autoClose === false) {
        return
      }

      if (event.key === 'Escape') {
        setVisible(false)
      }
    }

    const handleMouseUp = (event: Event) => {
      if (!dropdownToggleRef.current || !dropdownMenuRef.current) {
        return
      }

      if (dropdownToggleRef.current.contains(event.target as HTMLElement)) {
        return
      }

      if (
        autoClose === true ||
        (autoClose === 'inside' && dropdownMenuRef.current.contains(event.target as HTMLElement)) ||
        (autoClose === 'outside' && !dropdownMenuRef.current.contains(event.target as HTMLElement))
      ) {
        setTimeout(() => setVisible(false), 1)
        return
      }
    }

    return (
      <CDropdownContext.Provider value={contextValues}>
        {variant === 'input-group' ? (
          <>{children}</>
        ) : (
          <Component
            className={classNames(
              variant === 'nav-item' ? 'nav-item dropdown' : variant,
              {
                'dropdown-center': direction === 'center',
                'dropup dropup-center': direction === 'dropup-center',
                [`${direction}`]:
                  direction && direction !== 'center' && direction !== 'dropup-center',
              },
              className
            )}
            {...rest}
            ref={forkedRef}
          >
            {children}
          </Component>
        )}
      </CDropdownContext.Provider>
    )
  }
)

const alignmentDirection = PropTypes.oneOf<Directions>(['start', 'end'])

CDropdown.propTypes = {
  alignment: PropTypes.oneOfType([
    alignmentDirection,
    PropTypes.shape({ xs: alignmentDirection.isRequired }),
    PropTypes.shape({ sm: alignmentDirection.isRequired }),
    PropTypes.shape({ md: alignmentDirection.isRequired }),
    PropTypes.shape({ lg: alignmentDirection.isRequired }),
    PropTypes.shape({ xl: alignmentDirection.isRequired }),
    PropTypes.shape({ xxl: alignmentDirection.isRequired }),
  ]),
  as: PropTypes.elementType,
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'inside' | 'outside'>(['inside', 'outside']),
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(['center', 'dropup', 'dropup-center', 'dropend', 'dropstart']),
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: placementPropType,
  popper: PropTypes.bool,
  popperConfig: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  portal: PropTypes.bool,
  variant: PropTypes.oneOf(['btn-group', 'dropdown', 'input-group', 'nav-item']),
  visible: PropTypes.bool,
}

CDropdown.displayName = 'CDropdown'
