import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { sidebarCssClasses } from './Shared';
import ClickOutHandler from 'react-onclickout'
import './Shared/element-closest'

const propTypes = {
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

const defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

class AppSidebar extends Component {
  constructor(props) {
    super(props);

    this.isCompact = this.isCompact.bind(this);
    this.isFixed = this.isFixed.bind(this);
    this.isMinimized = this.isMinimized.bind(this);
    this.isOffCanvas = this.isOffCanvas.bind(this);
    this.displayBreakpoint = this.displayBreakpoint.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  }

  isCompact(compact) {
    if (compact) { document.body.classList.add('sidebar-compact'); }
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('sidebar-fixed'); }
  }

  isMinimized(minimized) {
    if (minimized) { document.body.classList.add('sidebar-minimized'); }
  }

  isOffCanvas(offCanvas) {
    if (offCanvas) { document.body.classList.add('sidebar-off-canvas'); }
  }

  displayBreakpoint(display) {
    const cssTemplate = `sidebar-${display}-show`;
    let [cssClass] = sidebarCssClasses[0];
    if (display && sidebarCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.remove('sidebar-show');
    }
  }

  onClickOut(e) {
    if (typeof window !== 'undefined' && document.body.classList.contains('sidebar-show')) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.compact
    delete attributes.display
    delete attributes.fixed
    delete attributes.minimized
    delete attributes.offCanvas
    delete attributes.isOpen
    delete attributes.staticContext

    const classes = classNames(className, 'sidebar');

    // sidebar-nav root
    return (
      <ClickOutHandler onClickOut={(e) => {this.onClickOut(e)}}>
        <Tag className={classes} {...attributes}>
          {children}
        </Tag>
      </ClickOutHandler>
    );
  }
}

AppSidebar.propTypes = propTypes;
AppSidebar.defaultProps = defaultProps;

export default AppSidebar;
