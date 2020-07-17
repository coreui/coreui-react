import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CEmbedItem

const CEmbedItem = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    'embed-responsive-item'
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CEmbedItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.oneOf(['iframe', 'embed', 'video', 'object', 'img'])
};

CEmbedItem.defaultProps = {
  tag: 'iframe'
}

export default CEmbedItem
