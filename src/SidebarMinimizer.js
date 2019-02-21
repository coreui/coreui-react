import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LayoutHelper from './Shared/layout/layout'

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

  componentDidMount() {
    const isMinimized = document.body.classList.contains('sidebar-minimized');
    LayoutHelper.sidebarPSToggle(!isMinimized)
  }

  handleClick() {
    LayoutHelper.sidebarToggle()
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
