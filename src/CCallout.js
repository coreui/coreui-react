import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCallout

const CCallout = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    'c-callout',
    'c-callout-'+color,
    className
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCallout.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string
};

CCallout.defaultProps = {
  tag: 'div',
};

export default CCallout;
