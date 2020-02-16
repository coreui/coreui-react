import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';
import CCarouselItem from './CCarouselItem';

export const Context = React.createContext({});

//component - CoreUI / CCarouselCustom

const CCarouselCustom = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    slide,
  } = props;

  const [direction, setDirection] = useState("right");
  const [indicatorClicked, setIndicatorClicked] = useState(false);

  const fields = useRef({lastProps: null}).current;

  const setInterval = (properties = props)=>{
    clearInterval();
    if (properties.interval) {
      fields.cycleInterval = window.setInterval(() => {
        properties.next();
      }, parseInt(properties.interval, 10));
    }
  }

  const clearInterval = ()=>{
    window.clearInterval(fields.cycleInterval);
  }

  const hoverStart = (...args)=>{
    if (props.pause === 'hover') {
      clearInterval();
    }
    if (props.mouseEnter) {
      props.mouseEnter(...args);
    }
  }

  const hoverEnd = (...args)=>{
    if (props.pause === 'hover') {
      setInterval();
    }
    if (props.mouseLeave) {
      props.mouseLeave(...args);
    }
  }

  const handleKeyPress = (e)=>{
    if (props.keyboard) {
      if (e.keyCode === 37) {
        props.previous();
      } else if (e.keyCode === 39) {
        props.next();
      }
    }
  }

  const renderItems = (carouselItems, className)=>{
    const {slide} = props;
    return (
      <div role="listbox" className={className}>
        {carouselItems.map((item, index) => {
          const isIn = (index === props.activeIndex);
          return React.cloneElement(item, {
            in: isIn,
            slide: slide,
          });
        })}
      </div>
    );
  }

  const setState = (oVal, nVal, setF)=>{
    if (nVal===oVal)
      return;
    setF(nVal);
  }

  //effect

  useEffect(() => {
    if (props.ride === 'carousel') {
      setInterval();
    }
    document.addEventListener('keyup', handleKeyPress);
    fields._handleKeyPress = handleKeyPress;
    return function cleanup() {
      clearInterval();
      document.removeEventListener('keyup', fields._handleKeyPress);
    };
  },
  []);

  useEffect(() => {
    if (fields.wrappedOnClickFunc){
      fields.wrappedOnClickFunc();
      setIndicatorClicked(false);
      fields.wrappedOnClickFunc = null;
    }
  });

  //render

  setInterval(props);
  if (fields.lastProps){
    if (fields.lastProps.activeIndex + 1 === props.activeIndex) {
      setState(direction, "right", setDirection);
    } else if (fields.lastProps.activeIndex - 1 === props.activeIndex) {
      setState(direction, "left", setDirection);
    } else if (fields.lastProps.activeIndex > props.activeIndex) {
      setState(direction, indicatorClicked ? "left" : "right", setDirection);
    } else if (fields.lastProps.activeIndex !== props.activeIndex) {
      setState(direction, indicatorClicked ? "right" : "left", setDirection);
    }
    setState(indicatorClicked, false, setIndicatorClicked);
  }

  fields.lastProps = props;

  const outerClasses = mapToCssModules(classNames(
    className,
    'carousel',
    slide && 'slide'
  ), cssModule);
  const innerClasses = mapToCssModules(classNames(
    'carousel-inner'
  ), cssModule);

  const children = props.children.filter(child => child !== null && child !== undefined && typeof child !== 'boolean');

  const slidesOnly = children.every(child => child.type === CCarouselItem);

  if (slidesOnly) {
    return (
      <Context.Provider value={{direction: direction}}>
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd} ref={innerRef}>
          {renderItems(children, innerClasses)}
        </div>
      </Context.Provider>
    );
  }

  if (children[0] instanceof Array) {
    const carouselItems = children[0];
    const controlLeft = children[1];
    const controlRight = children[2];

    return (
      <Context.Provider value={{direction: direction}}>
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd} ref={innerRef}>
          {renderItems(carouselItems, innerClasses)}
          {controlLeft}
          {controlRight}
        </div>
      </Context.Provider>
    );
  }

  const indicators = children[0];
  const wrappedOnClick = (e) => {
    if (typeof indicators.props.onClickHandler === 'function') {
      //this.setState({ indicatorClicked: true }, () => indicators.props.onClickHandler(e));
      fields.wrappedOnClickFunc = ()=>indicators.props.onClickHandler(e);
      setIndicatorClicked(true);
    }
  };

  const wrappedIndicators = React.cloneElement(indicators, { onClickHandler: wrappedOnClick });
  const carouselItems = children[1];
  const controlLeft = children[2];
  const controlRight = children[3];

  return (
    <Context.Provider value={{direction: direction}}>
      <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd} ref={innerRef}>
        {wrappedIndicators}
        {renderItems(carouselItems, innerClasses)}
        {controlLeft}
        {controlRight}
      </div>
    </Context.Provider>
  );

}

CCarouselCustom.propTypes = {
  cssModule: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  activeIndex: PropTypes.number,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  keyboard: PropTypes.bool,
  pause: PropTypes.oneOf(['hover', false]),
  ride: PropTypes.oneOf(['carousel']),
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  slide: PropTypes.bool
};

CCarouselCustom.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
};

export default CCarouselCustom;
