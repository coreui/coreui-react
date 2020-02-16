import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CButtonToolbar

const CButtonToolbar = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    justify,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    justify ? 'justify-content-between' : false,
    'btn-toolbar'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef}/>
  );

}

CButtonToolbar.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  role: PropTypes.string,
  justify: PropTypes.bool,
  'aria-label': PropTypes.string,
};

CButtonToolbar.defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

export default CButtonToolbar;
