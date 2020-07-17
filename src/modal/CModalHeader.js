import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import { Context } from './CModal'
import CButtonClose from '../button/CButtonClose'
//component - CoreUI / CModalHeader

const CModalHeader = props=>{

  const {
    tag: Tag,
    className,
    //
    innerRef,
    closeButton,
    ...attributes
  } = props

  const { close } = useContext(Context)
  
  //render


  const classes = classNames(
    className,
    'modal-header'
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  closeButton: PropTypes.bool
};

CModalHeader.defaultProps = {
  tag: 'header'
};

export default CModalHeader
