import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'

//component - CoreUI / CNavbar

const CNavbar = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    expandable,
    light,
    fixed,
    sticky,
    color,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'navbar', className,
    light ? 'navbar-light' : 'navbar-dark',
    {
      [`navbar-expand${expandable===true ? '': `-${expandable}`}`]: expandable,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      'sticky-top': sticky
    }
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CNavbar.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  light: PropTypes.bool,
  color: PropTypes.string,
  fixed: PropTypes.oneOf(['', 'top', 'bottom']),
  sticky: PropTypes.bool,
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

CNavbar.defaultProps = {
  tag: 'nav'
};

export default CNavbar;
