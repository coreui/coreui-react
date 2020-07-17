import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Context = React.createContext({});

//component - CoreUI / CCarousel

const CCarousel = props => {

  const {
    className,
    //
    innerRef,
    autoSlide,
    activeIndex,
    animate,
    onSlideChange,
    ...attributes
  } = props;

  const [state, setState] = useState([null, activeIndex])
  const [itemNumber, setItemNumber] = useState(null)
  const [animating, setAnimating] = useState()

  useEffect(() => {
    setState([state[1], activeIndex])
  }, [activeIndex])

  const timeout = useRef()

  const setNext = () => {
    reset()
    if (autoSlide) {
      timeout.current = setTimeout(() => nextItem(), autoSlide)
    } 
  }
  const reset = () => clearTimeout(timeout.current)
  const nextItem = () => {
    setState([state[1], itemNumber === state[1] + 1 ? 0 : state[1] + 1, 'next'])
  }

  useEffect(() => {
    onSlideChange && onSlideChange(state[1])
    setNext()
    return () => reset()
  }, [state])


  const classes = classNames('carousel', className)
  return (
    <div
      className={classes}
      onMouseEnter={reset}
      onMouseLeave={setNext}
      {...attributes}
      ref={innerRef}
    >
      <Context.Provider value={{
        state,
        setState,
        animate,
        itemNumber,
        setItemNumber,
        animating,
        setAnimating
      }}>
        {props.children}
      </Context.Provider>
    </div>
  )
}

CCarousel.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.array,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activeIndex: PropTypes.number,
  autoSlide: PropTypes.number,
  animate: PropTypes.bool,
  onSlideChange: PropTypes.func
};

CCarousel.defaultProps = {
  activeIndex: 0
};

export default CCarousel
