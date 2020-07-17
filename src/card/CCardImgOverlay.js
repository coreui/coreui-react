import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CCardImgOverlay

const CCardImgOverlay = props=>{

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    'card-img-overlay'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardImgOverlay.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CCardImgOverlay.defaultProps = {
  tag: 'div'
};

export default CCardImgOverlay;
