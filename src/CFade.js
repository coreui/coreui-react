import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
import {Transition} from 'react-transition-group';

//component - CoreUI / CFade

const CFade = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    children,
    //
    innerRef,
    baseClass,
    baseClassActive,
    ...attributes
  } = props;

  //render

  const transitionProps = pick(attributes, TransitionPropTypeKeys);
  const childProps = omit(attributes, TransitionPropTypeKeys);

  return (
    <Transition {...transitionProps}>
      {(status) => {
        const isActive = status === 'entered';
        const classes = mapToCssModules(classNames(
          className,
          baseClass,
          isActive && baseClassActive
        ), cssModule);
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );

}

CFade.propTypes = {
  ...Transition.propTypes,
  tag: tagPropType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string
};

CFade.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  //
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

export default CFade;
