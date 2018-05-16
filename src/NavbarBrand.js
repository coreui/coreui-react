import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  brand: PropTypes.any,
  full: PropTypes.any,
  minimized: PropTypes.any
};

const defaultProps = {
  tag: 'a'
};

class AppNavbarBrand extends Component {
  imgSrc(brand) {
    return brand.src ? brand.src : '';
  }

  imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  }

  imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  }

  imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  }

  navbarBrandImg(props, classBrand, key) {
    return (
      <img
          src={this.imgSrc(props)}
          width={this.imgWidth(props)}
          height={this.imgHeight(props)}
          alt={this.imgAlt(props)}
          className={classBrand}
          key={key.toString()}
      />
    );
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;
    const classes = classNames(className, 'navbar-brand');

    const img = [];
    if (this.props.brand) {
      const props = this.props.brand;
      const classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      const props = this.props.full;
      const classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      const props = this.props.minimized;
      const classBrand = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }

    return (
      <Tag {...attributes} className={classes}>
        {children || img}
      </Tag>
    );
  }
}

AppNavbarBrand.propTypes = propTypes;
AppNavbarBrand.defaultProps = defaultProps;

export default AppNavbarBrand;
