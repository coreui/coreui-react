import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {tagPropType} from '../utils/helper.js'

//component - CoreUI / CListGroup

const CListGroup = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    horizontal,
    flush,
    accent,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    'list-group', 
    {
      [`list-group-horizontal-${horizontal}`]: horizontal,
      'list-group-flush': flush,
      'list-group-accent': accent
    }
  );

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  flush: PropTypes.bool,
  horizontal: PropTypes.string,
  accent: PropTypes.bool
};

CListGroup.defaultProps = {
  tag: 'ul',
};

export default CListGroup
