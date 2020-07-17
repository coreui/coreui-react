import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from '../utils/helper.js';

//component - CoreUI / CForm

const CForm = props=>{

  const {
    tag: Tag,
    className,
    innerRef,
    //
    inline,
    wasValidated,
    ...attributes
  } = props;

  //render

  const classes = classNames(
    className,
    inline ? 'form-inline' : false,
    wasValidated ? 'was-validated' : false
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CForm.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inline: PropTypes.bool,
  wasValidated: PropTypes.bool
};

CForm.defaultProps = {
  tag: 'form',
};

export default CForm;
