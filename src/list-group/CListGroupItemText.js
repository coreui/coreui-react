import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CListGroupItemText
const CListGroupItemText = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = classNames('list-group-item-text', className)

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )

}

CListGroupItemText.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
}

CListGroupItemText.defaultProps = {
  tag: 'p'
}

export default CListGroupItemText
