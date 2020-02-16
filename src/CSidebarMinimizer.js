import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSidebarMinimizer

const CSidebarMinimizer = props=>{

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
    'c-sidebar-minimizer'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CSidebarMinimizer.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

CSidebarMinimizer.defaultProps = {
  tag: 'button',
  type: 'button'
};

export default CSidebarMinimizer;
