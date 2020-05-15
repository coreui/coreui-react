import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { pickByKeys } from '@coreui/utils/src'
import { TransitionPropTypeKeys } from '../utils/helper.js'
import { Transition } from 'react-transition-group'

const transitionStatusToClassHash = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
};

const getTransitionClass = status => {
  return transitionStatusToClassHash[status] || 'collapse'
}

const getHeight = node => {
  return node.scrollHeight;
}

//component - CoreUI / CCollapse

const CCollapse = props => {

  const {
    children,
    className,
    //
    innerRef,
    show,
    navbar,
    ...rest
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
  const transitionProps = pickByKeys(rest, TransitionPropTypeKeys)
  const childPropKeys = Object.keys(rest).filter(attr => {
    return !TransitionPropTypeKeys.includes(attr)
  })
  const childProps = pickByKeys(rest, childPropKeys)

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
        let collapseClass = getTransitionClass(status)
        const classes = classNames(
          className,
          collapseClass,
          navbar && 'navbar-collapse'
        );
        const style = height === null ? null : { height }
        return (
          <div
            {...childProps}
            style={{ ...childProps.style, ...style }}
            className={classes}
            ref={innerRef}
          >
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

CCollapse.propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
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
  timeout: 350,
};

export default CCollapse
