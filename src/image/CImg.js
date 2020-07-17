import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CImg
const CImg = props => {

  const {
    className,
    //
    innerRef,
    fluid,
    block,
    thumbnail,
    shape,
    align,
    src,
    width,
    height,
    placeholderColor,
    fluidGrow,
    ...attributes
  } = props

  const alignClass = align === 'center' ? 'mx-auto' : 
                     align === 'right' ? 'float-right' :
                     align === 'left' ? 'float-left' : ''

  // render
  const classes = classNames(
    className,
    alignClass,
    thumbnail && 'img-thumbnail',
    fluid || fluidGrow && 'img-fluid',
    fluidGrow && 'w-100',
    block && 'd-block',
    shape
  )

  return (
    src ?
      <img
        className={classes}
        src={src}
        width={width}
        height={height}
        {...attributes}
        ref={innerRef} 
      /> :
      <svg
        className={classes}
        width={width}
        height={height}
        style={{'backgroundColor': placeholderColor }}
        {...attributes}
        ref={innerRef}
      />
  )

}

CImg.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  fluid: PropTypes.bool,
  fluidGrow: PropTypes.bool,
  shape: PropTypes.string,//oneOf(['', 'rounded']),
  thumbnail: PropTypes.bool,
  align: PropTypes.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: PropTypes.string
};

CImg.defaultProps = {
  placeholderColor: 'transparent'
};

export default CImg
