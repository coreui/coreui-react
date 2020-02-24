import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CToastHeader

const CToastHeader = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    //closeButton,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'toast-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CToastHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  closeButton: PropTypes.bool
};

CToastHeader.defaultProps = {
  tag: 'div',
  closeButton: true
};

export default CToastHeader;
