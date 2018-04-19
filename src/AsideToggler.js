import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses } from './Shared/index';
import toggleClasses from './Shared/toggle-classes';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.any,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

const defaultProps = {
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
      toggleClasses(cssClass, asideMenuCssClasses);
    }
  }

  render() {
    const { className, children, type, tag: Tag, ...attributes } = this.props;

    delete attributes.display
    delete attributes.mobile
    delete attributes.display

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
