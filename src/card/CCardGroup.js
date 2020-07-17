import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {tagPropType} from '../utils/helper.js'

//component - CoreUI / CCardGroup

const CCardGroup = props=>{

  const {
    tag: Tag,
    className,
    //
    innerRef,
    deck,
    columns,
    ...attributes
  } = props

  //render

  const classes = classNames(
    `card-${columns ? 'columns' : deck ? 'deck' : 'group' }`,
    className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )

}

CCardGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  deck: PropTypes.bool,
  columns: PropTypes.bool,
}

CCardGroup.defaultProps = {
  tag: 'div'
}

export default CCardGroup
