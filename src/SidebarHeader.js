import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'div'
};

class AppSidebarHeader extends Component {
  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;
    const classes = classNames(className, 'sidebar-header');
    const header = children ? 
      <Tag className={classes} {...attributes} >
        {children}
      </Tag>
     : null;

    return (
      header
    );
  }
}

AppSidebarHeader.propTypes = propTypes;
AppSidebarHeader.defaultProps = defaultProps;

export default AppSidebarHeader;
