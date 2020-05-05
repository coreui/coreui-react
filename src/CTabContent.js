import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
//component - CoreUI / CTabContent

const CTabContent = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render
  const classes = classNames('tab-content',className)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CTabContent.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

export default CTabContent
