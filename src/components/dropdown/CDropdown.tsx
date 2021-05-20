import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Manager } from 'react-popper'

import { Placements, placementPropType } from '../Types'
import { useForkedRef } from '../../utils/hooks'

export type Directions = 'start' | 'end'

export type Breakpoints =
  | { xs: Directions }
  | { sm: Directions }
  | { md: Directions }
  | { lg: Directions }
  | { xl: Directions }
  | { xxl: Directions }

export type Alignments = Directions | Breakpoints

export interface CDropdownProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  /**
   * @type { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
   */
  alignment?: Alignments
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'div'
   */
  component?: string | ElementType
  /**
   * Sets a darker color scheme to match a dark navbar.
   */
  dark?: boolean
  /**
   * Sets a specified  direction and location of the dropdown menu. [docs]
   *
   * @type 'dropup' | 'dropend' | 'dropstart'
   */
  direction?: 'dropup' | 'dropend' | 'dropstart'
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. [docs]
   *
   * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
   * @default 'bottom-start'
   */
  placement?: Placements
  /**
   * If you want to disable dynamic positioning set this property to `true`.
   */
  popper?: boolean
  /**
   * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item. [docs]
   */
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'
  /**
   * Toggle the visibility of dropdown menu component. [docs]
   *
   * @default false
   */
  visible?: boolean
}

interface ContextProps extends CDropdownProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const CDropdownContext = createContext({} as ContextProps)

export const CDropdown = forwardRef<HTMLDivElement | HTMLLIElement, CDropdownProps>(
  (
    {
      children,
      alignment,
      className,
      dark,
      direction,
      placement = 'bottom-start',
      popper = true,
      variant = 'btn-group',
      component = 'div',
      visible = false,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState(visible)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, dropdownRef)

    const Component = variant === 'nav-item' ? 'li' : component

    // Disable popper if responsive aligment is set.
    if (typeof alignment === 'object') {
      popper = false
    }

    const contextValues = {
      alignment,
      dark,
      direction: direction,
      placement: placement,
      popper,
      variant,
      visible: _visible,
      setVisible,
    }

    const _className = classNames(
      variant === 'nav-item' ? 'nav-item dropdown' : variant,
      {
        show: _visible,
      },
      direction,
      className,
    )

    useEffect(() => {
      window.addEventListener('click', handleClickOutside)
      window.addEventListener('keyup', handleKeyup)
      // TODO: consider to add in future releases `window.addEventListener('mouseover', handleKeyup)`

      return () => {
        window.removeEventListener('click', handleClickOutside)
        window.removeEventListener('keyup', handleKeyup)
        // TODO: consider to add in future releases `window.addEventListener('mouseover', handleKeyup)`
      }
    })

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    const handleKeyup = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
        setVisible(false)
      }
    }
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
        setVisible(false)
      }
    }

    return popper ? (
      <CDropdownContext.Provider value={contextValues}>
        <Manager>
          {/* TODO: find solution how to handle click outside */}
          {variant === 'input-group' ? (
            <>{children}</>
          ) : (
            <Component className={_className} {...rest} ref={forkedRef}>
              {children}
            </Component>
          )}
        </Manager>
      </CDropdownContext.Provider>
    ) : (
      <CDropdownContext.Provider value={contextValues}>
        <Component className={_className} {...rest} ref={forkedRef}>
          {children}
        </Component>
      </CDropdownContext.Provider>
    )
  },
)

CDropdown.propTypes = {
  alignment: PropTypes.any, // TODO: fix; add proper PropTypes
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(['dropup', 'dropend', 'dropstart']),
  placement: placementPropType,
  popper: PropTypes.bool,
  variant: PropTypes.oneOf(['btn-group', 'dropdown', 'input-group', 'nav-item']),
  visible: PropTypes.bool,
}

CDropdown.displayName = 'CDropdown'
