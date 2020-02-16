import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CInputGroup

const CInputGroup = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    size,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CInputGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.string
};

CInputGroup.defaultProps = {
  tag: 'div'
};

export default CInputGroup;
