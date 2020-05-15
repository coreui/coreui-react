import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CCarouselInner

const CCarouselInner = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    'carousel-inner',
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

CCarouselInner.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

export default CCarouselInner
