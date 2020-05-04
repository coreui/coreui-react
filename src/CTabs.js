import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

//component - CoreUI / CTabPane
export const Context = React.createContext()

const CTabs = props => {
  const {
    children,
    activeTab,
    onActiveTabChange,
    fade
  } = props

  const [active, setActive] = useState()
  useEffect(() => setActive(activeTab), [activeTab])

  const setActiveTab = (tab) => {
    onActiveTabChange && onActiveTabChange(tab)
    setActive(tab)
  }

  return (
    <>
      <Context.Provider value={{active, setActiveTab, fade}}>
        {children}
      </Context.Provider>
    </>
  )
}

CTabs.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onActiveTabChange: PropTypes.func,
  fade: PropTypes.bool
};

CTabs.defaultProps = {
  activeTab: 0,
  fade: true
};

export default CTabs
