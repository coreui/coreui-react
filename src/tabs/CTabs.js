import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

//component - CoreUI / CTabPane
export const Context = React.createContext()

const CTabs = props => {
  const {
    children,
    activeTab,
    onActiveTabChange
  } = props

  const [active, setActive] = useState()
  useEffect(() => setActive(activeTab), [activeTab])

  const setActiveTab = (tab) => {
    onActiveTabChange && onActiveTabChange(tab)
    setActive(tab)
  }

  return (
    <React.Fragment>
      <Context.Provider value={{active, setActiveTab}}>
        {children}
      </Context.Provider>
    </React.Fragment>
  )
}

CTabs.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onActiveTabChange: PropTypes.func,
}

CTabs.defaultProps = {
  activeTab: 0
}

export default CTabs
