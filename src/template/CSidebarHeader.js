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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CSidebarHeader.defaultProps = {
  tag: 'div'
};

export default CSidebarHeader
