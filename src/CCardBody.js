import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCardBody

const CCardBody = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    overlay,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'card-body',
    overlay ? 'card-img-overlay' : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  overlay: PropTypes.bool,
};

CCardBody.defaultProps = {
  tag: 'div'
};

export default CCardBody;
