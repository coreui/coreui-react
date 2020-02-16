import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSidebarHeader

const CSidebarHeader = props=>{

  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    'c-sidebar-header'
  );

  return (
    children ?
      <Tag className={classes} {...attributes} ref={innerRef}>
        {children}
      </Tag>
     : null
  );

}

CSidebarHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarHeader.defaultProps = {
  tag: 'div'
};

export default CSidebarHeader;
