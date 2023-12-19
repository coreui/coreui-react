import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { PolymorphicRefForwardingComponent } from '../../helpers'

export interface CSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   *
   * @since 5.0.0-rc.0
   */
  as?: ElementType
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

interface ContextProps {
  visibleGroup: string
  setVisibleGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const CNavContext = createContext({} as ContextProps)

const recursiveClone = (children: ReactNode, id?: string): ReactNode => {
  return React.Children.map(children, (child: ReactNode, index: number) => {
    const _id = id ? `${id}.${index}` : `${index}`

    if (!React.isValidElement(child)) {
      return child
    }

    if (child.props && child.props.children) {
      child = React.cloneElement(child, {
        // @ts-expect-error the `displayName` exist in each component. TODO: resolve
        ...((child.type.displayName === 'CNavGroup' || child.type.displayName === 'CNavLink') && {
          idx: _id,
          test: _id,
        }),
        // @ts-expect-error the `children` exist in each component. TODO: resolve
        children: recursiveClone(child.props.children, _id),
      })
    }

    return React.cloneElement(child as React.ReactElement<any>, {
      // @ts-expect-error the `displayName` exist in each component. TODO: resolve
      ...((child.type.displayName === 'CNavGroup' || child.type.displayName === 'CNavLink') && {
        idx: _id,
        test: _id,
      }),
    })
  })
}

export const CSidebarNav: PolymorphicRefForwardingComponent<'ul', CSidebarNavProps> = forwardRef<
  HTMLUListElement,
  CSidebarNavProps
>(({ children, as: Component = 'ul', className, ...rest }, ref) => {
  const [visibleGroup, setVisibleGroup] = useState('')
  const CNavContextValues = {
    visibleGroup,
    setVisibleGroup,
  }

  return (
    <CNavContext.Provider value={CNavContextValues}>
      <Component className={classNames('sidebar-nav', className)} ref={ref} {...rest}>
        {recursiveClone(children)}
      </Component>
    </CNavContext.Provider>
  )
})

CSidebarNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
}

CSidebarNav.displayName = 'CSidebarNav'
