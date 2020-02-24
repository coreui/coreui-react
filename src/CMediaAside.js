import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

import {Context} from './CMedia';

//component - CoreUI / CMediaAside

const CMediaAside = props=>{

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    //asideImageProps,
    asideVerticalPosition,
    asideRight,
    addAsideMargin,
    ...attributes
  } = props;

  /*
  const computedAsideImageProps = ()=>{
    return Object.assign(
      {
        placeholderColor: '#777777',
        width: '64px',
        height: asideVerticalPosition === 'stretch' ? '100%' : '64px'
      },
      asideImageProps || {}
    )
  }
  */

  const context = useContext(Context);

  if (!asideRight && context.asideRight)
    asideRight = true;

  //render

  const classes = mapToCssModules(classNames(
    className,
    addAsideMargin ? `m${asideRight? 'l' : 'r' }-3` : '',
    `align-self-${asideVerticalPosition}`
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CMediaAside.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  asideVerticalPosition: PropTypes.string,
  asideRight: PropTypes.bool,
  asideImageProps: PropTypes.object,
  addAsideMargin: PropTypes.bool
};

CMediaAside.defaultProps = {
  tag: 'div',
  asideVerticalPosition: 'start'
};

export default CMediaAside;
