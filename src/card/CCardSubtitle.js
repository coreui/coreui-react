import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CCardSubtitle

const CCardSubtitle = props=>{

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
    'card-subtitle'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardSubtitle.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CCardSubtitle.defaultProps = {
  tag: 'h6'
};

export default CCardSubtitle;
