import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSidebarNavDivider

const CSidebarNavDivider = props=>{

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    'c-sidebar-nav-divider'
  );

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  );

}

CSidebarNavDivider.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarNavDivider.defaultProps = {
  tag: 'li'
};

export default CSidebarNavDivider;
