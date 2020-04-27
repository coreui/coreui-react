import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CTable

const CTable = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    size,
    bordered,
    borderless,
    striped,
    dark,
    hover,
    ...attributes
  } = props;

  //render
  const classes = mapToCssModules(classNames(
    className,
    'table',
    size && 'table-' + size,
    bordered && 'table-bordered',
    borderless && 'table-borderless',
    striped && 'table-striped',
    dark && 'table-dark',
    hover && 'table-hover'
  ), cssModule);

  return (
    <table className={classes} {...attributes} ref={innerRef}/>
  )
}

CTable.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool
};

export default CTable
