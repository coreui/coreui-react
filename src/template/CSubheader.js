import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CSubheader
const CSubheader = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = classNames(
    'c-subheader',
    className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CSubheader.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CSubheader.defaultProps = {
  tag: 'div'
};

export default CSubheader
