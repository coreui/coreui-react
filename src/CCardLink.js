import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CLink from './CLink';

//component - CoreUI / CCardLink

const CCardLink = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  return (
    <CLink {...attributes} className={classes} />
  );

}

CCardLink.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CCardLink.defaultProps = {
};

export default CCardLink;
