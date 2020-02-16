import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CForm

const CForm = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    innerRef,
    //
    inline,
    wasValidated,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    inline ? 'form-inline' : false,
    wasValidated ? 'was-validated' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CForm.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  inline: PropTypes.bool,
  wasValidated: PropTypes.bool
};

CForm.defaultProps = {
  tag: 'form',
};

export default CForm;
