var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { sidebarCssClasses } from './Shared';

var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  minimized: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

var AppSidebar = function (_Component) {
  _inherits(AppSidebar, _Component);

  function AppSidebar(props) {
    _classCallCheck(this, AppSidebar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isCompact = _this.isCompact.bind(_this);
    _this.isFixed = _this.isFixed.bind(_this);
    _this.isMinimized = _this.isMinimized.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }

  AppSidebar.prototype.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };

  AppSidebar.prototype.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };

  AppSidebar.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };

  AppSidebar.prototype.isMinimized = function isMinimized(minimized) {
    if (minimized) {
      document.body.classList.add('sidebar-minimized');
    }
  };

  AppSidebar.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };

  AppSidebar.prototype.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = 'sidebar-' + display + '-show';
    var _sidebarCssClasses$ = sidebarCssClasses[0],
        cssClass = _sidebarCssClasses$[0];

    if (display && sidebarCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };

  AppSidebar.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        compact = _props.compact,
        display = _props.display,
        fixed = _props.fixed,
        minimized = _props.minimized,
        offCanvas = _props.offCanvas,
        isOpen = _props.isOpen,
        Tag = _props.tag,
        staticContext = _props.staticContext,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'compact', 'display', 'fixed', 'minimized', 'offCanvas', 'isOpen', 'tag', 'staticContext']);

    var classes = classNames(className, 'sidebar');

    // sidebar-nav root
    return React.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppSidebar;
}(Component);

AppSidebar.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebar.defaultProps = defaultProps;

export default AppSidebar;