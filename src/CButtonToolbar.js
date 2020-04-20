import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CButtonToolbar

const CButtonToolbar = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    justify,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar',
    { [`justify-content-${justify}`]: justify }
  ), cssModule)

  return (
    <div 
      className={classes}
      role="toolbar"
      aria-label="toolbar"
      {...attributes} 
      ref={innerRef} 
    />
  )

}

CButtonToolbar.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  role: PropTypes.string,
  justify: PropTypes.oneOf(['', 'start', 'end', 'between', 'center'])
}

export default CButtonToolbar
