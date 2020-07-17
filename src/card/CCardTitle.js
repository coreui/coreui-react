import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CCardTitle

const CCardTitle = props=>{

  const {
    tag: Tag,
    className,
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    'card-title'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardTitle.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CCardTitle.defaultProps = {
  tag: 'h4'
};

export default CCardTitle;
