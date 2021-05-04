import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component. [docs]
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
    const classes = classNames('sidebar-nav', className)
    return (
      <ul className={classes} ref={ref} {...rest}>
        {/* {children} */}
        <CNavContext.Provider value={CNavContextValues}>
          {
            // @ts-expect-error
            React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { key: index, idx: index })
              }
            })
          }
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
