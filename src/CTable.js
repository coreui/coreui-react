import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CTable

const CTable = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    custom,
    //
    innerRef,
    size,
    bordered,
    borderless,
    striped,
    dark,
    hover,
    responsive,
    responsiveTag: ResponsiveTag,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    borderless ? 'table-borderless' : false,
    striped ? 'table-striped' : false,
    dark ? 'table-dark' : false,
    hover ? 'table-hover' : false,
  ), cssModule);

  let table;
  if (custom)
    table = <Tag {...attributes} className={classes} />;
  else {
    table = (
      <Tag {...attributes} className={classes}>
        <tbody>
          {attributes.children}
        </tbody>
      </Tag>
    )
  }

  if (responsive) {
    const responsiveClassName = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
    return (
      <ResponsiveTag className={responsiveClassName} ref={innerRef}>
        {table}
      </ResponsiveTag>
    );
  }

  return table;

}

CTable.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  responsiveTag: tagPropType
};

CTable.defaultProps = {
  custom: true,
  tag: 'table',
  responsiveTag: 'div',
};

export default CTable;
