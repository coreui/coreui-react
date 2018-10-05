import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses, checkBreakpoint, validBreakpoints } from './Shared';
import toggleClasses from './Shared/toggle-classes';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true
};

class AppAside extends Component {
  constructor(props) {
    super(props);

    this.isFixed = this.isFixed.bind(this);
    this.isOffCanvas = this.isOffCanvas.bind(this);
    this.displayBreakpoint = this.displayBreakpoint.bind(this);
  }

  componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('aside-menu-fixed'); }
  }

  isOffCanvas(offCanvas) {
    if (offCanvas) { document.body.classList.add('aside-menu-off-canvas'); }
  }

  displayBreakpoint(display) {
    if (display && checkBreakpoint(display, validBreakpoints)) {
      const cssClass = `aside-menu-${display}-show`
      toggleClasses(cssClass, asideMenuCssClasses, true)
    }
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.display
    delete attributes.fixed
    delete attributes.offCanvas
    delete attributes.isOpen

    const classes = classNames(className, 'aside-menu');

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

AppAside.propTypes = propTypes;
AppAside.defaultProps = defaultProps;

export default AppAside;
