import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CCardText

const CCardText = props=>{

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
    'card-text'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardText.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CCardText.defaultProps = {
  tag: 'p'
};

export default CCardText;
