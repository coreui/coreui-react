import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CToaster

const CToaster = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    position,
    ...attributes
  } = props;

  // render

  const classes = mapToCssModules(classNames(
    className,
    'toaster',
    (position && position !== 'static') ? 'toaster-'+position : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CToaster.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  position: PropTypes.oneOf([
          '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
          'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
        ])
};

CToaster.defaultProps = {
  tag: 'div',
  position: 'top-right',
};

export default CToaster;
