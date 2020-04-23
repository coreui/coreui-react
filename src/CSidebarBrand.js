import React from 'react'
import CBrand from './CBrand'

//component - CoreUI / CSidebarBrand

const CSidebarBrand = props => {
  return (
    <CBrand {...props} className={['c-sidebar-brand', props.className]}/>
  )
}

export default CSidebarBrand
