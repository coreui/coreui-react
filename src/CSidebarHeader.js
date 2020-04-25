import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSidebarHeader

const CSidebarHeader = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames('c-sidebar-header', className)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CSidebarHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarHeader.defaultProps = {
  tag: 'div'
};

export default CSidebarHeader
