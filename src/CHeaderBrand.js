import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CHeaderBrand

const CHeaderBrand = props=>{

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
    'c-header-brand'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CHeaderBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CHeaderBrand.defaultProps = {
  tag: 'img'
};

export default CHeaderBrand;
