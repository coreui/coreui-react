import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCarouselCaption

const CCarouselCaption = props=>{

  const {
    cssModule,
    className,
    //
    innerRef,
    captionHeader,
    captionText,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'carousel-caption',
    'd-none',
    'd-md-block'
  ), cssModule);

  return (
    <div className={classes} {...attributes} ref={innerRef}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );

}

CCarouselCaption.propTypes = {
  cssModule: PropTypes.object,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  captionHeader: PropTypes.string,
  captionText: PropTypes.string.isRequired
};

export default CCarouselCaption;
