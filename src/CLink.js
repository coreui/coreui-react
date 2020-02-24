import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';
import {NavLink} from 'react-router-dom';

//component - CoreUI / CLink

const CLink = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    active,
    disabled,
    href,
    to,
    ...attributes
  } = props;

  let href2 = href;

  const onClick = e=>{
    if (props.disabled) {
      e.preventDefault();
      return;
    }
    if (href2 === '#') {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick(e);
    }
  }

  // render

  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : null,
    disabled ? 'disabled' : null
  ), cssModule);

  //<span {...attributes} className={classes} ref={innerRef} />

  to || (href2 || (href2='#'));

  return (
    to ?
      <NavLink to={to} {...attributes} className={classes} ref={innerRef} /> :
        <a href={href2} {...attributes} className={classes} onClick={onClick} ref={innerRef} />
  );

}

CLink.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func
};

CLink.defaultProps = {
};

export default CLink;
