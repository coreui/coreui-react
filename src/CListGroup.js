import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CListGroup

const CListGroup = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    horizontal,
    flush,
    variant,
    ...attributes
  } = props;

  // render

  const classes = mapToCssModules(classNames(
    className,
    'list-group',
    horizontal ? `list-group-horizontal-${horizontal}` : false,
    flush ? 'list-group-flush' : false,
    variant ? 'list-group-'+variant : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CListGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  horizontal: PropTypes.string,
  role: PropTypes.string,
  variant: PropTypes.string
};

CListGroup.defaultProps = {
  tag: 'ul',
  role: 'list-items'
};

export default CListGroup;
