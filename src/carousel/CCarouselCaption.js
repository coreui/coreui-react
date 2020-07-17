import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CCarouselCaption

const CCarouselCaption = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    'carousel-caption',
    className
  )

  return (
    <div 
      className={classes} 
      {...attributes} 
      ref={innerRef}
    />
  )
}

CCarouselCaption.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

export default CCarouselCaption
