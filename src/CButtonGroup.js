import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CButtonGroup

const CButtonGroup = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    size,
    vertical,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CButtonGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  vertical: PropTypes.bool,
  role: PropTypes.string
};

CButtonGroup.defaultProps = {
  tag: 'div',
  role: 'group',
};

export default CButtonGroup;
