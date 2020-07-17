import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSidebarNavDivider

const CSidebarNavDivider = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'c-sidebar-nav-divider',
    className
  )

  return (
    <li className={classes} {...attributes} ref={innerRef} />
  )

}

CSidebarNavDivider.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};


export default CSidebarNavDivider
