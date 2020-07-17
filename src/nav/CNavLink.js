import React, { useContext, useState, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import CLink from '../link/CLink'

import { Context } from '../tabs/CTabs'

const getIndex = (el) => Array.from(el.parentNode.children).indexOf(el)

const getState = ({ current: el }) => {
  const hasSiblings = el.parentElement.childNodes.length > 1
  return el.dataset.tab || getIndex(hasSiblings ? el : el.parentElement)
}

const CNavLink = props => {

  const {
    innerRef,
    className,
    onClick,
    ...rest
  } = props

  const tabState = useContext(Context)
  const actTab = (tabState || {}).active
  const ref = createRef()
  innerRef && innerRef(ref)
  const [active, setActive] = useState()

  useEffect(() => {
    typeof actTab !== 'undefined' && setActive(getState(ref) === actTab)
  }, [actTab])

  const click = (e) => {
    onClick && onClick(e)
    tabState && tabState.setActiveTab(getState(ref))
  }

  return (
    <CLink 
      active={active}
      {...rest}
      innerRef={ref}
      onClick={click} 
      className={['nav-link', className]}
    />
  )
}

CNavLink.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onClick: PropTypes.func
};

export default CNavLink
