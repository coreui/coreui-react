import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CToastHeader

const CToastHeader = props=>{

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
    'toast-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CToastHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
};

CToastHeader.defaultProps = {
  tag: 'div'
};

export default CToastHeader;
