import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CModalTitle
const CModalTitle = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'modal-title', className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )
}

CModalTitle.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CModalTitle.defaultProps = {
  tag: 'h5'
};

export default CModalTitle
