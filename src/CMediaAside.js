import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CMediaAside

const CMediaAside = props => {

  let {
    className,
    cssModule,
    //
    innerRef,
    verticalPosition,
    ...attributes
  } = props


  //render

  const classes = mapToCssModules(classNames(
    className, `align-self-${verticalPosition}`
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )

}

CMediaAside.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  verticalPosition: PropTypes.oneOf(['start', 'center', 'end', 'stretch'])
};

CMediaAside.defaultProps = {
  verticalPosition: 'start'
};

export default CMediaAside
