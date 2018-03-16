var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses } from './Shared';

var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  hidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

var defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  hidden: false,
  isOpen: false,
  offCanvas: true
};

var AppAside = function (_Component) {
  _inherits(AppAside, _Component);

  function AppAside(props) {
    _classCallCheck(this, AppAside);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isFixed = _this.isFixed.bind(_this);
    _this.isHidden = _this.isHidden.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }

  AppAside.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isHidden(this.props.hidden);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  };

  AppAside.prototype.isHidden = function isHidden(hidden) {
    if (hidden) {
      document.body.classList.add('aside-menu-hidden');
    }
  };

  AppAside.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  };

  AppAside.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  };

  AppAside.prototype.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = 'aside-menu-' + display + '-show';
    var _asideMenuCssClasses$ = asideMenuCssClasses[0],
        cssClass = _asideMenuCssClasses$[0];

    if (display && asideMenuCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };

  AppAside.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        display = _props.display,
        fixed = _props.fixed,
        hidden = _props.hidden,
        offCanvas = _props.offCanvas,
        isOpen = _props.isOpen,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'display', 'fixed', 'hidden', 'offCanvas', 'isOpen', 'tag']);

    var classes = classNames(className, 'aside-menu');

    return React.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      children
    );
  };

  return AppAside;
}(Component);

AppAside.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppAside.defaultProps = defaultProps;

export default AppAside;