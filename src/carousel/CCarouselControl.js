import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Context } from './CCarousel'

//component - CoreUI / CCarouselControl

const CCarouselControl = props => {

  const {
    className,
    children,
    //
    innerRef,
    direction,
    ...attributes
  } = props

  const { state, setState, itemNumber, animating } = useContext(Context)

  const onClick = () => {
    if (animating) {
      return
    }
    let newIdx
    if (direction === 'next') {
      newIdx = itemNumber === state[1] + 1 ? 0 : state[1] + 1
    } else {
      newIdx = state[1] === 0 ? itemNumber - 1 : state[1] - 1
    }
    setState([state[1], newIdx, direction])
  }

  //render

  const anchorClasses = classNames(
    `carousel-control-${direction}`, className,
  )

  return (
    <a
      className={anchorClasses}
      {...attributes}
      onClick={onClick}
      ref={innerRef}
    >
      { children || <span 
        className={`carousel-control-${direction}-icon`} 
        aria-label={direction} 
      />}
    </a>
  )
}

CCarouselControl.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};

export default CCarouselControl
