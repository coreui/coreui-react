import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, omit, pick, TransitionTimeouts, TransitionPropTypeKeys, TransitionStatuses, tagPropType} from './Shared/helper.js';
import {Transition} from 'react-transition-group';

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'collapsing',
  [TransitionStatuses.ENTERED]: 'collapse show',
  [TransitionStatuses.EXITING]: 'collapsing',
  [TransitionStatuses.EXITED]: 'collapse',
};

const getTransitionClass = status=>{
  return transitionStatusToClassHash[status] || 'collapse';
}

const getHeight = node=>{
  return node.scrollHeight;
}

//component - CoreUI / CCollapse

const CCollapse = props=>{

  const {
    children,
    className,
    cssModule,
    //
    innerRef,
    show,
    navbar,
    ...otherProps
  } = props;

  const [height, setHeight] = useState(null);

  const onEntering = (node, isAppearing)=>{
    setHeight(getHeight(node));
    props.onEntering(node, isAppearing);
  }

  const onEntered = (node, isAppearing)=>{
    setHeight(null);
    props.onEntered(node, isAppearing);
  }

  const onExit = node=>{
    setHeight(getHeight(node));
    props.onExit(node);
  }

  const onExiting = node=>{
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
    setHeight(0);
    props.onExiting(node);
  }

  const onExited = node=>{
    setHeight(null);
    props.onExited(node);
  }

  //render

  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
  const childProps = omit(otherProps, TransitionPropTypeKeys);

  return (
    <Transition
      {...transitionProps}
      in={show}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {(status) => {
        let collapseClass = getTransitionClass(status);
        const classes = mapToCssModules(classNames(
          className,
          collapseClass,
          navbar && 'navbar-collapse'
        ), cssModule);
        const style = height === null ? null : { height };
        return (
          <div
            {...childProps}
            style={{ ...childProps.style, ...style }}
            className={classes}
            ref={innerRef}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );

}

CCollapse.propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.node,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  show: PropTypes.bool,
  navbar: PropTypes.bool
};

CCollapse.defaultProps = {
  ...Transition.defaultProps,
  show: false,
  appear: false,
  enter: true,
  exit: true,
  timeout: TransitionTimeouts.Collapse,
};

export default CCollapse;
