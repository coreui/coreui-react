/* eslint react/prop-types: 0 */
import React from 'react'
import CBrand from '../utils/CBrand'

//component - CoreUI / CSidebarBrand
const CSidebarBrand = props => {
  return (
    <CBrand {...props} className={['c-sidebar-brand', props.className]}/>
  )
}

export default CSidebarBrand
