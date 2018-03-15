import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sidebarCssClasses } from './Shared/index';
import { ToggleClasses } from './Shared/toggle-classes';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.any,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

const defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button',
};

class AppSidebarToggler extends Component {
  constructor(props) {
    super(props);
    this.sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle(e) {
    e.preventDefault();

    if (this.props.mobile) {
      document.body.classList.toggle('sidebar-show');
    } else {
      const display = this.props.display;
      const cssTemplate = `sidebar-${display}-show`;
      let [cssClass] = sidebarCssClasses[0];
      if (display && sidebarCssClasses.indexOf(cssTemplate) > -1) {
        cssClass = cssTemplate;
      }
      ToggleClasses(cssClass, sidebarCssClasses);
    }
  }

  render() {
    const { className, children, mobile, tag: Tag, display, ...attributes } = this.props;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <button type="button" className={classes} {...attributes} onClick={this.sidebarToggle}>
        {children || <span className="navbar-toggler-icon" />}
      </button>
    );
  }
}

AppSidebarToggler.propTypes = propTypes;
AppSidebarToggler.defaultProps = defaultProps;

export default AppSidebarToggler;
