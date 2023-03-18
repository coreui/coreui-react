import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
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

export const CSidebarNav = forwardRef<HTMLUListElement, CSidebarNavProps>(
  ({ children, className, ...rest }, ref) => {
    const [visibleGroup, setVisibleGroup] = useState('')
    const CNavContextValues = {
      visibleGroup,
      setVisibleGroup,
    }

    return (
      <ul className={classNames('sidebar-nav', className)} ref={ref} {...rest}>
        <CNavContext.Provider value={CNavContextValues}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<any>, {
                key: index,
                idx: `${index}`,
              })
            }
            return
          })}
        </CNavContext.Provider>
      </ul>
    )
  },
)

CSidebarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CSidebarNav.displayName = 'CSidebarNav'
