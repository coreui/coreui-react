import React from 'react'
import CButtonClose from '../button/CButtonClose'

//component - CoreUI / CSidebarClose

const CSidebarClose = props => {
  return (
    <CButtonClose {...props} buttonClass={'c-sidebar-close'}>
      <svg className="c-icon" width="24" height="24" viewBox="0 0 24 24">
        <title>x</title>
        <path d="M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"></path>
      </svg>
    </CButtonClose>
  )
}

export default CSidebarClose
