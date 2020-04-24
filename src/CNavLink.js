import React from 'react'
import CLink from './CLink'

const CNavLink = props => {
  return (
    <CLink {...props} className={['nav-link', props.className]}/>
  )
}

export default CNavLink
