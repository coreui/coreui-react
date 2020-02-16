import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CLink from './CLink';

//component - CoreUI / CSidebarBrand

const CSidebarBrand = props=>{

  let {
    tag: Tag,
    children,
    className,
    custom,
    //
    innerRef,
    img,
    imgFull,
    imgMinimized,
    wrappedInLink,
    linkClassName,
    linkProps,
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
    const {
      src,
      width,
      alt,
      height,
      ...attributes
    } = props;
    return (
      <img
          src={imgSrc(props)}
          width={imgWidth(props)}
          height={imgHeight(props)}
          alt={imgAlt(props)}
          className={classBrand}
          {...attributes}
          key={key.toString()}
      />
    );
  }

  // render

  const classes = classNames(
    className,
    'c-sidebar-brand'
  );

  if (custom){
    return (
      <Tag className={classes} {...attributes} ref={innerRef}>
        {children}
      </Tag>
    );
  }

  const classesLink = classNames(
    linkClassName,
    'c-sidebar-brand'
  );

  const imgChildren = [];
  if (imgFull) {
    imgChildren.push(navbarBrandImg(imgFull||img, 'c-sidebar-brand-full', 1));
  }
  if (imgMinimized) {
    imgChildren.push(navbarBrandImg(imgMinimized||img, 'c-sidebar-brand-minimized', imgChildren.length + 1));
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef}>
      {
        wrappedInLink ?
          <CLink className={classesLink} {...linkProps} >
            {imgChildren}
          </CLink>
        :imgChildren
      }
    </Tag>
  );

}

CSidebarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imgFull: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imgMinimized: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object,
  wrappedInLink: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

CSidebarBrand.defaultProps = {
  tag: 'div'
};

export default CSidebarBrand;
