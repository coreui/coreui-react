import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

const defaultProps = {
  tag: 'button',
  type: 'button'
};

class AppSidebarMinimizer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  sidebarMinimize(e) {
    // e.preventDefault();

    document.body.classList.toggle('sidebar-minimized');
    const sidebar = document.querySelector('.sidebar-nav')
    if (sidebar) {
      sidebar.classList.toggle('ps');
      sidebar.classList.toggle('scrollbar-container');
    }
  }

  brandMinimize(e) {
    // e.preventDefault();

    document.body.classList.toggle('brand-minimized');
  }

  handleClick(e) {
    this.sidebarMinimize(e)
    this.brandMinimize(e)
  }

  render() {
    const { className, children, tag: Tag, type, ...attributes } = this.props;

    const classes = classNames(className, 'sidebar-minimizer', 'mt-auto');

    return (
      <Tag className={classes} type={type} {...attributes} onClick={(event)=>this.handleClick(event)} >
        {children}
      </Tag>
    );
  }
}

AppSidebarMinimizer.propTypes = propTypes;
AppSidebarMinimizer.defaultProps = defaultProps;

export default AppSidebarMinimizer;
