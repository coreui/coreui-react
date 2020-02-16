import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCardGroup

const CCardGroup = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    deck,
    columns,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    columns ? 'card-columns' : deck ? 'card-deck' : 'card-group'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CCardGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  deck: PropTypes.bool,
  columns: PropTypes.bool,
};

CCardGroup.defaultProps = {
  tag: 'div'
};

export default CCardGroup;
