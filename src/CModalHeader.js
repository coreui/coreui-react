import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'
import { Context } from './CModal'
import CButtonClose from './CButtonClose'
//component - CoreUI / CModalHeader

const CModalHeader = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    closeButton,
    ...attributes
  } = props

  const { close } = useContext(Context)
  
  //render


  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}>
      {props.children}
      {closeButton && <CButtonClose onClick={close}/>}
    </Tag>
  )

}

CModalHeader.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  closeButton: PropTypes.bool
};

CModalHeader.defaultProps = {
  tag: 'header'
};

export default CModalHeader
