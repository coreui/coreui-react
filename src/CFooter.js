import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CFooter

const CFooter = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    fixed,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    fixed ? 'c-footer-fixed' : null,
    'c-footer'
  ), cssModule);

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  );

}

CFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fixed: PropTypes.bool
};

CFooter.defaultProps = {
  tag: 'footer',
  fixed: true
};

export default CFooter;
