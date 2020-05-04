/* eslint react/prop-types: 0 */
import React from 'react'
import CBrand from './CBrand'

//component - CoreUI / CNavbarBrand
const CNavbarBrand = props => {
  return (
    <CBrand {...props} className={['navbar-brand', props.className]}/>
  )
}

export default CNavbarBrand