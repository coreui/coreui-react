import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSidebarFooter

const CSidebarFooter = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  // render
  const classes = classNames('c-sidebar-footer', className)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CSidebarFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarFooter.defaultProps = {
  tag: 'div'
};

export default CSidebarFooter
