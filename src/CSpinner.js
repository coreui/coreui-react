import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CSpinner

const CSpinner = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    variant,
    size,
    color,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(
    classNames(
      className,
      `spinner-${variant}`,
      size ? `spinner-${variant}-${size}` : false,
      color ? `text-${color}` : false
    ),
    cssModule
  );

  return (
    <Tag {...attributes} className={classes} role="status" ref={innerRef}>
      {
        children &&
        <span className={mapToCssModules('sr-only', cssModule)}>
          {children}
        </span>
      }
    </Tag>
  );

}

CSpinner.propTypes = {
  tag: tagPropType,
  children: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};

CSpinner.defaultProps = {
  tag: 'div',
  variant: 'border',
  children: 'Loading...'
};

export default CSpinner;
