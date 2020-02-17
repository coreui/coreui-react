import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import CCarouselCustom from './CCarouselCustom';
import CCarouselItem from './CCarouselItem';
import CCarouselControl from './CCarouselControl';
import CCarouselIndicators from './CCarouselIndicators';
import CCarouselCaption from './CCarouselCaption';

//component - CoreUI / CCarousel

const CCarousel = props=>{

  const {
    //
    custom,
    autoPlay,
    indicators,
    controls,
    items,
    goToIndex
  } = props;

  const [activeIndex, setActiveIndex] = useState(props.defaultOpen || false);

  const fields = useRef({animating: false}).current;

  if (!custom){

    const onExiting = ()=>{
      fields.animating = true;
    }

    const onExited = ()=>{
      fields.animating = false;
    }

    const next = ()=>{
      if (fields.animating) return;
      const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }

    const previous = ()=>{
      if (fields.animating) return;
      const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }

    const toIndex = newIndex=>{
      if (fields.animating) return;
      setActiveIndex(newIndex);
    }

    //render

    const slides = items.map((item) => {
      return (
        <CCarouselItem
          onExiting={onExiting}
          onExited={onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CCarouselCaption captionText={item.caption} captionHeader={item.header || item.caption} />
        </CCarouselItem>
      );
    });

    return (
      <CCarouselCustom
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride={autoPlay ? 'carousel' : undefined}
        {...props}
      >
        {indicators && <CCarouselIndicators
          items={items}
          activeIndex={props.activeIndex || activeIndex}
          onClickHandler={goToIndex || toIndex}
        />}
        {slides}
        {controls && <CCarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={props.previous || previous}
        />}
        {controls && <CCarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={props.next || next}
        />}
      </CCarouselCustom>
    );

  }

  return (
    <CCarouselCustom {...props}/>
  );

}

CCarousel.propTypes = {
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  items: PropTypes.array,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func
};

CCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true,
};

export default CCarousel;
