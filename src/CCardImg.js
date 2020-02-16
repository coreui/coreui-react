import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCardImg

const CCardImg = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    placement,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    placement ? `card-img-${placement}`: 'card-img'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardImg.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  placement: PropTypes.string
};

CCardImg.defaultProps = {
  tag: 'img'
};

export default CCardImg;
