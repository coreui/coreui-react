import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
import CEmbedObject from './CEmbedObject';

//component - CoreUI / CEmbed

const CEmbed = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    custom,
    innerRef,
    //
    ratio,
    type,
    src,
    objectClassName,
    objectProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    ratio ? `embed-responsive-${ratio}` : null,
    'embed-responsive'
  ), cssModule);

  const objectClasses = mapToCssModules(classNames(
    objectClassName
  ), cssModule);

  if (!custom){
    return (
      <Tag className={classes} {...attributes} ref={innerRef}>
        <CEmbedObject {...objectProps} className={objectClasses} type={type} src={src} />
      </Tag>
    );
  }

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  );

}

CEmbed.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  ratio: PropTypes.string,
  objectClassName: PropTypes.string,
  objectProps: PropTypes.object,
  ///
  type: PropTypes.string,
  src: PropTypes.string,
};

CEmbed.defaultProps = {
  tag: 'span',
  ratio: '16by9',
  type: 'iframe',
};

export default CEmbed;
