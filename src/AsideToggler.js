import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses } from './Shared/index';
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

class AppAsideToggler extends Component {
  constructor(props) {
    super(props);
    this.asideToggle = this.asideToggle.bind(this);

    this.state = {};
  }

  asideToggle(e) {
    e.preventDefault();

    if (this.props.mobile) {
      document.body.classList.toggle('aside-menu-show');
    } else {
      const display = this.props.display;
      const cssTemplate = `aside-menu-${display}-show`;
      let [cssClass] = asideMenuCssClasses[0];
      if (display && asideMenuCssClasses.indexOf(cssTemplate) > -1) {
        cssClass = cssTemplate;
      }
      ToggleClasses(cssClass, asideMenuCssClasses);
    }
  }

  render() {
    const { className, children, mobile, tag: Tag, display, ...attributes } = this.props;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <button
        type="button"
        className={classes}
        {...attributes}
        onClick={this.asideToggle}
      >
        {children || <span className="navbar-toggler-icon" />}
      </button>
    );
  }
}

AppAsideToggler.propTypes = propTypes;
AppAsideToggler.defaultProps = defaultProps;

export default AppAsideToggler;
