import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CSubheader
const CSubheader = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = mapToCssModules(classNames(
    'c-subheader',
    className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CSubheader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSubheader.defaultProps = {
  tag: 'div'
};

export default CSubheader
