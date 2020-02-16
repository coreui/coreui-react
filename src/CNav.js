import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CNav

const CNav = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    variant,
    vertical,
    horizontal,
    justified,
    fill,
    inCard,
    ...attributes
  } = props;

  const getVerticalClass = vertical=>{
    if (vertical === false) {
      return false;
    } else if (vertical === true || vertical === 'xs') {
      return 'flex-column';
    }
    return `flex-${vertical}-column`;
  };

  //render

  const classes = mapToCssModules(classNames(
    className,
    'nav',
    horizontal ? `justify-content-${horizontal}` : false,
    variant=='tabs' ? 'nav-tabs' : variant=='pills' ? 'nav-pills' : null,
    getVerticalClass(vertical),
    {
      'card-header-tabs': inCard && variant=='tabs',
      'card-header-pills': inCard && variant=='pills',
      'nav-justified': justified,
      'nav-fill': fill,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  variant: PropTypes.oneOf(['', 'tabs', 'pills']),
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  inCard: PropTypes.bool
};

CNav.defaultProps = {
  tag: 'ul',
  vertical: false,
};

export default CNav;
