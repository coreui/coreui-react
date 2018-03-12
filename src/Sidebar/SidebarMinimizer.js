import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

const defaultProps = {
  tag: 'button',
  type: 'button',
};

class AppSidebarMinimizer extends Component {
  sidebarMinimize(e) {
    e.preventDefault();

    document.body.classList.toggle('sidebar-minimized');
  }

  brandMinimize(e) {
    e.preventDefault();

    document.body.classList.toggle('brand-minimized');
  }

  render() {
    const { className, children, tag: Tag, type, ...attributes } = this.props;

    const classes = classNames(className, 'sidebar-minimizer');

    return (
      <Tag
        className={classes}
        type={type}
        {...attributes}
        onClick={(event) => { this.sidebarMinimize(event); this.brandMinimize(event); }}
      >
        {children}
      </Tag>
    );
  }
}

AppSidebarMinimizer.propTypes = propTypes;
AppSidebarMinimizer.defaultProps = defaultProps;

export default AppSidebarMinimizer;
