import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CJumbotron

const CJumbotron = props=>{

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
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CJumbotron.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fluid: PropTypes.bool
};

CJumbotron.defaultProps = {
  tag: 'div'
};

export default CJumbotron;
