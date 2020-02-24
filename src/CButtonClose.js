import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CButtonClose

const CButtonClose = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    iconHtml,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    'close',
    className
  ), cssModule);

  return (
    <Tag {...attributes} aria-label="Close" className={classes} ref={innerRef}>{children||iconHtml}</Tag>
  );

}

CButtonClose.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  iconHtml: PropTypes.oneOfType([PropTypes.node, PropTypes.string])//object
};

CButtonClose.defaultProps = {
  tag: 'button',
  iconHtml: <React.Fragment>&times;</React.Fragment>
};

export default CButtonClose;
