import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCarouselControl

const CCarouselControl = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    direction,
    onClickHandler,
    directionText,
    ...attributes
  } = props;

  const onClick = e=>{
    e.preventDefault();
    onClickHandler();
  }

  //render

  const anchorClasses = mapToCssModules(classNames(
    className,
    `carousel-control-${direction}`
  ), cssModule);

  const iconClasses = mapToCssModules(classNames(
    `carousel-control-${direction}-icon`
  ), cssModule);

  const screenReaderClasses = mapToCssModules(classNames(
    'sr-only'
  ), cssModule);

  return (
    <a
      {...attributes}
      className={anchorClasses}
      role="button"
      tabIndex="0"
      onClick={onClick}
      ref={innerRef}
    >
      <span className={iconClasses} aria-hidden="true" />
      <span className={screenReaderClasses}>{directionText || direction}</span>
    </a>
  );

}

CCarouselControl.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  directionText: PropTypes.string
};

export default CCarouselControl;
