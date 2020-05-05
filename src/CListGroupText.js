import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType} from './Shared/helper.js';

//component - CoreUI / CListGroupText

const CListGroupText = props=>{

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
    'list-group-item-text'
  );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CListGroupText.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CListGroupText.defaultProps = {
  tag: 'p'
};

export default CListGroupText;
