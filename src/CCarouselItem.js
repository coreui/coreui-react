import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, TransitionTimeouts, TransitionStatuses, tagPropType} from './Shared/helper.js';
import {Transition} from 'react-transition-group';
import {Context} from './CCarouselCustom';

//component - CoreUI / CCarouselItem

const CCarouselItem = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    in: isIn,
    slide,
    itemProps,
    ...transitionProps
  } = props;

  const context = useContext(Context);

  const [startAnimation, setStartAnimation] = useState(false);

  const onEnter = (node, isAppearing)=>{
    setStartAnimation(false);
    props.onEnter(node, isAppearing);
  }

  const onEntering = (node, isAppearing)=>{
    // getting this variable triggers a reflow
    const offsetHeight = node.offsetHeight;
    setStartAnimation(true);
    props.onEntering(node, isAppearing);
    return offsetHeight;
  }

  const onExit = node=>{
    setStartAnimation(false);
    props.onExit(node);
  }

  const onExiting = node=>{
    setStartAnimation(true);
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    props.onExiting(node);
  }

  const onExited = node=>{
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    props.onExited(node);
  }

  //render

  return (
    <Transition
      {...transitionProps}
      enter={slide}
      exit={slide}
      in={isIn}
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {(status) => {
        const {direction} = context;
        const isActive = (status === TransitionStatuses.ENTERED) || (status === TransitionStatuses.EXITING);
        const directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) &&
          startAnimation &&
          (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
        const orderClassName = (status === TransitionStatuses.ENTERING) &&
          (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
        const itemClasses = mapToCssModules(classNames(
          className,
          'carousel-item',
          isActive && 'active',
          directionClassName,
          orderClassName,
        ), cssModule);
        return (
          <Tag {...itemProps} className={itemClasses} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );

}

CCarouselItem.propTypes = {
  ...Transition.propTypes,
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  slide: PropTypes.bool,
  itemProps: PropTypes.object,
};

CCarouselItem.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

export default CCarouselItem;
