import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCarouselIndicators

const CCarouselIndicators = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    items,
    activeIndex,
    onClickHandler,
    itemProps,
    ...attributes
  } = props;

  //render

  const listClasses = mapToCssModules(classNames(
    className,
    'carousel-indicators'
  ), cssModule);

  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(classNames(
      { 'active': activeIndex === idx }
    ), cssModule);
    return (
      <li
        key={`${item.key || Object.values(item).join('')}`}
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }}
        className={indicatorClasses}
        {...itemProps}
      />);
  });

  return (
    <ol {...attributes} className={listClasses} ref={innerRef}>
      {indicators}
    </ol>
  );

}

CCarouselIndicators.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  itemProps: PropTypes.object
};

export default CCarouselIndicators;
