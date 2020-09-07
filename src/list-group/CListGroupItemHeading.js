import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CListGroupItemHeading
const CListGroupItemHeading = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  // render
  const classes = classNames('list-group-item-heading', className)

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )

}

CListGroupItemHeading.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
}

CListGroupItemHeading.defaultProps = {
  tag: 'h5'
}

export default CListGroupItemHeading
