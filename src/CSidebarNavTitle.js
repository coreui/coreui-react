import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSidebarNavTitle

const CSidebarNavTitle = props=>{

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
    'c-sidebar-nav-title'
  );

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  );

}

CSidebarNavTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarNavTitle.defaultProps = {
  tag: 'li'
};

export default CSidebarNavTitle;
