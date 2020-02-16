import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CInputGroupText from './CInputGroupText';

//component - CoreUI / CInputGroupAddon

const CInputGroupAddon = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    addonType,
    inputProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  if (typeof children === 'string') {
    return (
      <Tag {...attributes} className={classes}>
        <CInputGroupText children={children} {...inputProps}/>
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} children={children} ref={innerRef} />
  );

}

CInputGroupAddon.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  inputProps: PropTypes.object
};

CInputGroupAddon.defaultProps = {
  tag: 'div'
};

export default CInputGroupAddon;
