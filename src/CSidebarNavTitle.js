import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSidebarNavTitle

const CSidebarNavTitle = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = classNames(
    'c-sidebar-nav-title',
    className
  )

  return (
    <li className={classes} {...attributes} ref={innerRef}/>
  )
}

CSidebarNavTitle.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};


export default CSidebarNavTitle
