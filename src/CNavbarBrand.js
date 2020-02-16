import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, tagPropType} from './Shared/helper.js';

//component - CoreUI / CNavbarBrand

const CNavbarBrand = props=>{

  const {
    tag: Tag,
    className,
    children,
    //
    innerRef,
    ...attributes
  } = props;

  const imgSrc = brand=>{
    return brand.src ? brand.src : '';
  }
  const imgWidth = brand=>{
    return brand.width ? brand.width : 'auto';
  }
  const imgHeight = brand=>{
    return brand.height ? brand.height : 'auto';
  }
  const imgAlt = brand=>{
    return brand.alt ? brand.alt : '';
  }
  const navbarBrandImg = (props, classBrand, key)=>{
    return (
      <img
          src={imgSrc(props)}
          width={imgWidth(props)}
          height={imgHeight(props)}
          alt={imgAlt(props)}
          className={classBrand}
          key={key.toString()}
      />
    );
  }

  //render

  const classes = classNames(
    className,
    'navbar-brand'
  );

  const img = [];
  if (props.brand) {
    const classBrand = 'navbar-brand';//navbar-brand
    img.push(navbarBrandImg(props.brand, classBrand, img.length + 1));
  }
  if (props.full) {
    const classBrand = 'navbar-brand-full';
    img.push(navbarBrandImg(props.full, classBrand, img.length + 1));
  }
  if (props.minimized) {
    const classBrand = 'navbar-brand-minimized';
    img.push(navbarBrandImg(props.minimized, classBrand, img.length + 1));
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef}>
      {children || img}
    </Tag>
  );

}

CNavbarBrand.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  brand: PropTypes.any,
  full: PropTypes.any,
  minimized: PropTypes.any
};

CNavbarBrand.defaultProps = {
  tag: 'div'
};

export default CNavbarBrand;
