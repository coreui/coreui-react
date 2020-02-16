import React,{useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CBadge

const CBadge = props=>{

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    shape,
    ...attributes
  } = props;

  // render

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'badge-' + color,
    shape ? 'badge-'+shape : false
  ), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CBadge.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  shape: PropTypes.string
};

CBadge.defaultProps = {
  tag: 'span'
};

export default CBadge;
