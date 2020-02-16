import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CFormFeedback

const CFormFeedback = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    valid,
    tooltip,
    ...attributes
  } = props;

  //render

  const validMode = tooltip ? 'tooltip' : 'feedback';
  const classes = mapToCssModules(
    classNames(
      className,
      valid ? `valid-${validMode}` : `invalid-${validMode}`
    ),
    cssModule
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;

}

CFormFeedback.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

CFormFeedback.defaultProps = {
  tag: 'div',
  valid: undefined
};

export default CFormFeedback;
