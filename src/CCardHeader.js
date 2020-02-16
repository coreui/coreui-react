import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
//import CCard, {sharedPropTypes} from './CCard';

//component - CoreUI / CCardHeader

const CCardHeader = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'card-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CCardHeader.defaultProps = {
  tag: 'header'
};

export default CCardHeader;
