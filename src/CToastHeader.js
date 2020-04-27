import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import CButtonClose from './CButtonClose'

import { Context } from './CToast'

//component - CoreUI / CToastHeader
const CToastHeader = props => {

  const {
    className,
    cssModule,
    children,
    //
    innerRef,
    closeButton,
    ...attributes
  } = props

  const { close } = useContext(Context)
  
  //render
  const classes = mapToCssModules(classNames(
    'toast-header', className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}>
      { children }
      { closeButton && 
        <CButtonClose className="ml-auto" onClick={close}/>}
    </div>
  )
}

CToastHeader.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  closeButton: PropTypes.bool
};

CToastHeader.defaultProps = {
  closeButton: true
};

export default CToastHeader
