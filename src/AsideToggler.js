import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from './Shared/index';
import toggleClasses from './Shared/toggle-classes';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  display: PropTypes.any,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

const defaultProps = {
  defaultOpen: false,
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

class AppAsideToggler extends Component {
  constructor(props) {
    super(props);
    this.asideToggle = this.asideToggle.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.toggle(this.props.defaultOpen)
  }

  toggle (force) {
    const [display, mobile] = [this.props.display, this.props.mobile];
    let cssClass = asideMenuCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = `aside-menu-${display}-show`
    }
    toggleClasses(cssClass, asideMenuCssClasses, force)
  }

  asideToggle(e) {
    e.preventDefault();
    this.toggle()
  }

  render() {
    const { className, children, type, tag: Tag, ...attributes } = this.props;

    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <Tag
          type={type}
          className={classes}
          {...attributes}
          onClick={(event)=>this.asideToggle(event)}
      >
        {children || <span className="navbar-toggler-icon" />}
      </Tag>
    );
  }
}

AppAsideToggler.propTypes = propTypes;
AppAsideToggler.defaultProps = defaultProps;

export default AppAsideToggler;
