import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, tagPropType} from './Shared/helper.js';

//component - CoreUI / CEmbedObject

const CEmbedObject = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'embed-responsive-item'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CEmbedObject.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CEmbedObject.defaultProps = {
  tag: 'iframe'
};

export default CEmbedObject;
