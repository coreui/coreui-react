import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CIconRaw from './CIconRaw';
import style from './CIcon.module.css';

//component - CoreUI / CIcon

const CIcon = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    name,
    size,
    ...attributes
  } = props;

  //render

  let type = 'svg';

  if (typeof name == 'object'){
    switch(name.type){
      case 'class':
        type = 'class';
        break;
      default:
    }
  }

  if (type=='svg'){
    return (
      <CIconRaw {...attributes} name={name} size={size} className={className} />
    );
  }

  const classes = (classNames(
    mapToCssModules(className, Object.assign(style, cssModule)),
    type=='name' ? name :
      type=='class' ? name.className : null,
    size ? 'c-icon-'+size : null
  ));

  return (
    <Tag {...attributes} className={classes} />
  );

}

CIcon.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  name: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.string
};

CIcon.defaultProps = {
  tag: 'i'
};

export default CIcon;
