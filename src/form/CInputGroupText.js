import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CInputGroupText
const CInputGroupText = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = classNames(
    'input-group-text', className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CInputGroupText.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CInputGroupText.defaultProps = {
  tag: 'div'
};

export default CInputGroupText
