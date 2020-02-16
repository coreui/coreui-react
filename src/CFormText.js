import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CFormText

const CFormText = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    innerRef,
    //
    inline,
    color,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CFormText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  inline: PropTypes.bool,
  color: PropTypes.string
};

CFormText.defaultProps = {
  tag: 'small',
  color: 'muted',
};

export default CFormText;
