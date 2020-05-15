import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CContainer

const CContainer = props=>{

  const {
    tag: Tag,
    className,
    //
    innerRef,
    fluid,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CContainer.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool
};

CContainer.defaultProps = {
  tag: 'div',
};

export default CContainer;
