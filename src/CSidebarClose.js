import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CButtonClose from './CButtonClose';

//component - CoreUI / CSidebarClose

const CSidebarClose = props=>{

  const {
    className,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    'c-sidebar-close',
    className
  );

  return (
    <CButtonClose {...attributes} className={classes}>
      <svg className="c-icon" width="24" height="24" viewBox="0 0 24 24">
        <title>x</title>
        <path d="M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"></path>
      </svg>
    </CButtonClose>
  );

}

CSidebarClose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CSidebarClose.defaultProps = {
};

export default CSidebarClose;
