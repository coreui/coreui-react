import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CToggler

const CToggler = props => {

  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    inHeader,
    inNavbar,
    ...attributes
  } = props;

  const typeAttr = Tag === 'button' ? { type: 'button' } : null
  const type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null 
  const togglerClass = type ? `${type}-toggler` : ''
  const iconClass = type ? `${togglerClass}-icon` : ''

  //render
  const classes = classNames(
    togglerClass, className,
  )

  return (
    <Tag className={classes} {...typeAttr} {...attributes} ref={innerRef}>
      {children || <span className={iconClass}/>}
    </Tag>
  )

}

CToggler.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inHeader: PropTypes.bool,
  inNavbar: PropTypes.bool,
};

CToggler.defaultProps = {
  tag: 'button'
};

export default CToggler
