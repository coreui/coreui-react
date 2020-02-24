import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CImg

const CImg = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    fluid,
    block,
    thumbnail,
    shape,
    align,
    alt,
    src,
    width,
    height,
    placeholderColor,
    active,
    fluidGrow,
    ...attributes
  } = props;

  // vars

  const isActive = (()=>{
      //active prop is present in CImgLazy component, here always undefined
      return active !== false
  })();

  const alignClass = (()=>{
    if (align === 'center') {
      return 'mx-auto'
    } else if (align === 'right') {
      return 'float-right'
    } else if (align === 'left') {
      return 'float-left'
    }
    return null
  })();

  // render

  const classes = mapToCssModules(classNames(
    className,
    alignClass,
    thumbnail ? 'img-thumbnail' : null,
    fluid || fluidGrow ? 'img-fluid' : null,
    fluidGrow ? 'w-100' : null,
    block ? 'd-block' : null,
    shape ? shape : null,
  ), cssModule);

  return (
    src && isActive?
      <img
        {...attributes}
        className={classes}
        src={src}
        alt={alt}
        width={width}
        height={height}
        ref={innerRef} /> :
      <svg
        {...attributes}
        className={classes}
        width={width}
        height={height}
        style={{'backgroundColor': isActive ? placeholderColor : 'transparent' }}
        ref={innerRef}
      />
  );

}

CImg.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  fluid: PropTypes.bool,
  fluidGrow: PropTypes.bool,
  active: PropTypes.bool,
  shape: PropTypes.string,//oneOf(['', 'rounded']),
  thumbnail: PropTypes.bool,
  align: PropTypes.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: PropTypes.string
};

CImg.defaultProps = {
  placeholderColor: 'transparent'
};

export default CImg;
