import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CContainer

const CContainer = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    fluid,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CContainer.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool
};

CContainer.defaultProps = {
  tag: 'div',
};

export default CContainer;
