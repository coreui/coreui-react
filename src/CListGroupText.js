import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CListGroupText

const CListGroupText = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'list-group-item-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CListGroupText.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CListGroupText.defaultProps = {
  tag: 'p'
};

export default CListGroupText;
