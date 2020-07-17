import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSidebarForm

const CSidebarForm = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames('c-sidebar-form', className)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CSidebarForm.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CSidebarForm.defaultProps = {
  tag: 'div'
};

export default CSidebarForm
