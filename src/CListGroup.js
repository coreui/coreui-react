import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {tagPropType, mapToCssModules} from './Shared/helper.js'

//component - CoreUI / CListGroup

const CListGroup = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    horizontal,
    flush,
    accent,
    ...attributes
  } = props;

  // render

  const classes = mapToCssModules(classNames(
    className,
    'list-group', 
    {
      [`list-group-horizontal-${horizontal}`]: horizontal,
      'list-group-flush': flush,
      'list-group-accent': accent
    }
  ), cssModule);

  return (
    <Tag 
      className={classes}
      role="list-items"
      {...attributes}
      ref={innerRef}
    />
  )

}

CListGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  horizontal: PropTypes.string,
  accent: PropTypes.bool
};

CListGroup.defaultProps = {
  tag: 'ul',
};

export default CListGroup
