import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CEmbed

const CEmbed = props => {

  const {
    tag: Tag,
    className,
    innerRef,
    //
    ratio,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className, 'embed-responsive', `embed-responsive-${ratio}`
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CEmbed.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ratio: PropTypes.oneOf(['21by9', '16by9', '4by3', '1by1']),
};

CEmbed.defaultProps = {
  tag: 'div',
  ratio: '16by9'
}

export default CEmbed
