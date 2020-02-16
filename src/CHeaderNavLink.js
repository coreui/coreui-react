import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CLink from './CLink';

//component - CoreUI / CHeaderNavLink

const CHeaderNavLink = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav-link',
  ), cssModule);

  return (
    <CLink {...attributes} className={classes} ref={innerRef} />
  );

}

CHeaderNavLink.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CHeaderNavLink.defaultProps = {
};

export default CHeaderNavLink;
