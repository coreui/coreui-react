import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CJumbotron

const CJumbotron = props=>{

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
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CJumbotron.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool
};

CJumbotron.defaultProps = {
  tag: 'div'
};

export default CJumbotron;
