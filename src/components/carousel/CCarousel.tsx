import React, { FC, RefObject, HTMLAttributes, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCarouselProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Inner ref of main element. [docs]
   *
   * @type RefObject<HTMLDivElement> | {():void}
   */
  innerRef?: RefObject<HTMLDivElement> | { (): void } // TODO: check
  /**
   * index of the active item. [docs]
   *
   * @type number
   */
  activeIndex?: number
  /**
   * Slide starts on beginning. [docs]
   *
   * @type number
   */
  autoSlide?: number
  /**
   * Set 'animate' variable for created context. [docs]
   *
   * @type boolean
   */
  animate?: boolean
  /**
   * On slide change callback. [docs]
   *
   * @type (a:number|string|null)=>void
   */
  onSlideChange?: (a: number | string | null) => void
}

interface DataType {
  timeout?: null | ReturnType<typeof setTimeout>
}

export interface ContextType {
  itemNumber: number
  state: [number | null, number, string?]
  animating: boolean
  animate?: boolean
  setItemNumber: (a: number) => void
  setAnimating: (a: boolean) => void
  setState: (a: [number | null, number, string?]) => void
}

//

export const Context = React.createContext<ContextType>({
  itemNumber: 0,
  state: [null, 0],
  animating: false,
  setItemNumber: (_) => {},
  setAnimating: (_) => {},
  setState: (_) => {},
})

export const CCarousel: FC<CCarouselProps> = ({
  className,
  children,
  innerRef,
  autoSlide,
  activeIndex = 0,
  animate,
  onSlideChange,
  ...rest
}) => {
  const [state, setState] = useState<[number | null, number, string?]>([null, activeIndex])
  const [itemNumber, setItemNumber] = useState<number>(0)
  const [animating, setAnimating] = useState<boolean>(false)

  let data = useRef<DataType>({}).current

  const setNext = () => {
    reset()
    if (autoSlide) {
      data.timeout = setTimeout(() => nextItem(), autoSlide)
    }
  }
  const reset = () => data.timeout && clearTimeout(data.timeout)
  const nextItem = () => {
    if (typeof state[1] === 'number')
      setState([state[1], itemNumber === state[1] + 1 ? 0 : state[1] + 1, 'next'])
  }

  useEffect(() => {
    setState([state[1], activeIndex])
  }, [activeIndex])

  useEffect(() => {
    onSlideChange && onSlideChange(state[1])
    setNext()
    return () => {
      reset()
    }
  }, [state])

  // render

  const classes = classNames('carousel', className)

  return (
    <div className={classes} onMouseEnter={reset} onMouseLeave={setNext} {...rest} ref={innerRef}>
      <Context.Provider
        value={{
          state,
          setState,
          animate,
          itemNumber,
          setItemNumber,
          animating,
          setAnimating,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  )
}

CCarousel.propTypes = {
  activeIndex: PropTypes.number,
  animate: PropTypes.bool,
  autoSlide: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.any, // TODO: check
  onSlideChange: PropTypes.func,
}

CCarousel.displayName = 'CCarousel'
