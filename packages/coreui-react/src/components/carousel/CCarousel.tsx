import React, {
  Children,
  createContext,
  forwardRef,
  HTMLAttributes,
  useState,
  useEffect,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useForkedRef } from '../../utils/hooks'

const isVisible = (element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export interface CCarouselProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * index of the active item.
   */
  activeIndex?: number
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Adding in the previous and next controls.
   */
  controls?: boolean
  /**
   * Add darker controls, indicators, and captions.
   */
  dark?: boolean
  /**
   * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
   */
  interval?: boolean | number
  /**
   * Adding indicators at the bottom of the carousel for each item.
   */
  indicators?: boolean
  /**
   * Callback fired when a slide transition end.
   */
  onSlid?: (active: number, direction: string) => void
  /**
   * Callback fired when a slide transition starts.
   */
  onSlide?: (active: number, direction: string) => void
  /**
   * If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause?: boolean | 'hover'
  /**
   * Set type of the transition.
   */
  transition?: 'slide' | 'crossfade'
  /**
   * Set whether the carousel should cycle continuously or have hard stops.
   */
  wrap?: boolean
}

interface DataType {
  timeout?: null | ReturnType<typeof setTimeout>
}

export interface ContextProps {
  setAnimating: (a: boolean) => void
  setCustomInterval: (a: boolean | number) => void
}

export const CCarouselContext = createContext({} as ContextProps)

export const CCarousel = forwardRef<HTMLDivElement, CCarouselProps>(
  (
    {
      children,
      activeIndex = 0,
      className,
      controls,
      dark,
      indicators,
      interval = 5000,
      onSlid,
      onSlide,
      pause = 'hover',
      transition,
      wrap = true,
      ...rest
    },
    ref,
  ) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, carouselRef)
    const data = useRef<DataType>({}).current

    const [active, setActive] = useState<number>(activeIndex)
    const [animating, setAnimating] = useState<boolean>(false)
    const [customInterval, setCustomInterval] = useState<boolean | number>()
    const [direction, setDirection] = useState<string>('next')
    const [itemsNumber, setItemsNumber] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>()

    useEffect(() => {
      setItemsNumber(Children.toArray(children).length)
    })

    useEffect(() => {
      visible && cycle()
    }, [visible])

    useEffect(() => {
      !animating && cycle()
      !animating && onSlid && onSlid(active, direction)
      animating && onSlide && onSlide(active, direction)
    }, [animating])

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    const _className = classNames(
      'carousel slide',
      transition === 'crossfade' && 'carousel-fade',
      dark && 'carousel-dark',
      className,
    )

    const cycle = () => {
      _pause()
      if (!wrap && active === itemsNumber - 1) {
        return
      }

      if (typeof interval === 'number') {
        data.timeout = setTimeout(
          () => nextItemWhenVisible(),
          typeof customInterval === 'number' ? customInterval : interval,
        )
      }
    }
    const _pause = () => pause && data.timeout && clearTimeout(data.timeout)

    const nextItemWhenVisible = () => {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && carouselRef.current && isVisible(carouselRef.current)) {
        if (animating) {
          return
        }
        handleControlClick('next')
      }
    }

    const handleControlClick = (direction: string) => {
      if (animating) {
        return
      }
      setDirection(direction)
      if (direction === 'next') {
        active === itemsNumber - 1 ? setActive(0) : setActive(active + 1)
      } else {
        active === 0 ? setActive(itemsNumber - 1) : setActive(active - 1)
      }
    }

    const handleIndicatorClick = (index: number) => {
      if (active === index) {
        return
      }

      if (active < index) {
        setDirection('next')
        setActive(index)
        return
      }

      if (active > index) {
        setDirection('prev')
        setActive(index)
      }
    }

    const handleScroll = () => {
      if (!document.hidden && carouselRef.current && isVisible(carouselRef.current)) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    return (
      <div
        className={_className}
        onMouseEnter={_pause}
        onMouseLeave={cycle}
        {...rest}
        ref={forkedRef}
      >
        <CCarouselContext.Provider
          value={{
            setAnimating,
            setCustomInterval,
          }}
        >
          {indicators && (
            <ol className="carousel-indicators">
              {Array.from({ length: itemsNumber }, (_, i) => i).map((index) => {
                return (
                  <li
                    key={`indicator${index}`}
                    onClick={() => {
                      !animating && handleIndicatorClick(index)
                    }}
                    className={active === index ? 'active' : ''}
                    data-coreui-target=""
                  />
                )
              })}
            </ol>
          )}
          <div className="carousel-inner">
            {Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<any>, {
                  active: active === index ? true : false,
                  direction: direction,
                  key: index,
                })
              }
              return
            })}
          </div>
          {controls && (
            <>
              <button className="carousel-control-prev" onClick={() => handleControlClick('prev')}>
                <span className={`carousel-control-prev-icon`} aria-label="prev" />
              </button>
              <button className="carousel-control-next" onClick={() => handleControlClick('next')}>
                <span className={`carousel-control-next-icon`} aria-label="next" />
              </button>
            </>
          )}
        </CCarouselContext.Provider>
      </div>
    )
  },
)

CCarousel.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  controls: PropTypes.bool,
  dark: PropTypes.bool,
  indicators: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onSlid: PropTypes.func,
  onSlide: PropTypes.func,
  pause: PropTypes.oneOf([false, 'hover']),
  transition: PropTypes.oneOf(['slide', 'crossfade']),
  wrap: PropTypes.bool,
}

CCarousel.displayName = 'CCarousel'
