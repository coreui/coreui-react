import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CModalBody

const CModalBody = props=>{

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
    'modal-body'
  );

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  );

}

CModalBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CModalBody.defaultProps = {
  tag: 'div',
};

export default CModalBody;
