import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSidebarFooter

const CSidebarFooter = props=>{

  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames(className, 'c-sidebar-footer');

  return (
    children ?
      <Tag className={classes} {...attributes} ref={innerRef}>
        {children}
      </Tag>
     : null
  );

}

CSidebarFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarFooter.defaultProps = {
  tag: 'div'
};

export default CSidebarFooter;
